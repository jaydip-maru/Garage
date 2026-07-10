const User = require("../Models/User/User");
const PandingUser = require("../Models/User/PandingUser");


const { createSecretToken } = require("../utils/secretToken");
const otpGenerator = require("otp-generator");
require("dotenv").config();


exports.verifyOtp = async(req, res) =>{
  const { email, otp } = req.body;

  const pendingUser = await PandingUser.findOne({ email });

  if (!pendingUser){ return res
  .status(200)
  .json({ message: "User Not Found", success: false });
  }

  if (pendingUser.otp != otp) {
    return  res
    .status(200)
    .json({ message: "Invalid Otp", success: false });
  }

  if (pendingUser.otpExpires < Date.now()) {
    return  res
    .status(200)
    .json({ message: "Otp expride", success: false });
  }
  
  const user1 = await User.create({
    username: pendingUser.username,
    email: pendingUser.email,
    password: pendingUser.password,
});
await pendingUser.deleteOne({
  _id: pendingUser._id
});
       

 

  const token = createSecretToken({id: user1._id,isMechanic: user1.isMechanic});

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 60 * 60 * 24,
    withCredentials: true,
  });



  res
  .status(200)
  .json({ message: "Email verify successfuly", success: true, user1 });
}



exports.resendOtp = async(req, res) =>{
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {return res
  .status(200)
  .json({ message: "User Not Found", success: true });
  }
  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
    digits: true,
  });

  user.otp = otp;
  user.otpExpires = Date.now() + 5 * 60 * 1000;

  await user.save();

  await transporter.sendMail({
    to: email,
    subject: "Resented OTP",
    html: `<h2>Your new OTP is: ${otp}</h2>`
  });

  res
  .status(200)
  .json({ message: "Otp resend succesufuly", success: true });
}
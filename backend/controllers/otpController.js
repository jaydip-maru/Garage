const User = require("../Models/User/User");
const { createSecretToken } = require("../utils/secretToken");
const otpGenerator = require("otp-generator");
require("dotenv").config();


exports.verifyOtp = async(req, res) =>{
  const { email, otp } = req.body;

  const user = await User.findOne({ email });

  if (!user){ return res
  .status(200)
  .json({ message: "User Not Found", success: false });
  }

  if (user.otp != otp) {
    return  res
    .status(200)
    .json({ message: "Invalid Otp", success: false });
  }

  if (user.otpExpires < Date.now()) {
    return  res
    .status(200)
    .json({ message: "Otp expride", success: false });
  }
  

  user.isVerified = true;
  user.otp = null;
  user.otpExpires = null;

  const token = createSecretToken({id: user._id,isMechanic: user.isMechanic});

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 60 * 60 * 24,
    withCredentials: true,
  });

  await user.save();

  res
  .status(200)
  .json({ message: "Email verify successfuly", success: true });
}



exports.resendOtp = async(req, res) =>{
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {return res
  .status(200)
  .json({ message: "User Not Found", success: true });
  }
  const otp = otpGenerator.generate(6, {
    digits: true,
    alphabets: false,
    upperCase: false,
    specialChars: false
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
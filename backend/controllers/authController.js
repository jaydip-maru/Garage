const User = require("../Models/User/User");
const PandingUser = require("../Models/User/PandingUser");

const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../utils/secretToken");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "garageapp9@gmail.com",
    pass: "bdktzbejtrqccibz"
  }
});

exports.signup = async (req, res) => {
   const { email, username, password } = req.body;
  console.log(password);

    const existUser1 = await User.findOne({ email });

  
    if (existUser1 && existUser1.isVerified) {
      return res.json({ message: "user is exist" });
    }
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
      digits: true,
    });
 
    console.log(password);
    const existUser = await PandingUser.findOne({ email });
    
if(existUser){
   await PandingUser.updateOne(
    { email,password, username,otp, otpExpires: Date.now() + 5 * 60 * 1000 });
    await transporter.sendMail({
      to: email,
      subject: "Your OTP for Verification",
      html: `<h2>Your OTP is: ${otp}</h2>`
    });

}else{
    await PandingUser.create(
      { email,password, username,otp, otpExpires: Date.now() + 5 * 60 * 1000 });
      await transporter.sendMail({
        to: email,
        subject: "Your OTP for Verification",
        html: `<h2>Your OTP is: ${otp}</h2>`
      });
    }
    res
      .status(200)
      .json({ message: "OTP sent to email", success: true });
};



exports.login = async (req, res) => {
 try{
   const { email, password } = req.body;
 
   if (!email || !password) {
     return res.json({ message: "All field are require" });
   }
   const user = await User.findOne({ email });

   if (!user) {
     console.log(" use not exist");
     return res.json({ message: "Incorect credintioal" });
   }
   
 
   const auth = await bcrypt.compare(password, user.password);

   if (!auth) {
     console.log(" use exist but not match");
 
     return res.json({ message: "Incorect credintioal" });
   }

 
 
   const token = createSecretToken({id: user._id,isMechanic: user.isMechanic});
   
   res.cookie("token", token, {
     httpOnly: true,
     secure: true,
     sameSite: "none",
     maxAge: 60 * 60 * 60 * 24,
     withCredentials: true,
  });
 
   res.status(201).json({ message: "User logged in successfully", success: true,username: user.username, id: user._id, isMec: user.isMechanic});

 } catch(err) {
   console.log(err);
 }
};

exports.logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    withCredentials: true,
  });

  res.status(200).json({ message: "Logged out successfully" });
};
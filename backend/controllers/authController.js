const User = require("../Models/User/User");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../secretToken");

exports.signup = async (req, res) => {
   const { email, username, password } = req.body;
  
    const existUser = await User.findOne({ username });
    const existUser1 = await User.findOne({ email });
  
    if (existUser || existUser1) {
      return res.json({ message: "user is exist" });
    }
  
    const user = await User.create({ email, password, username });
    const token = createSecretToken({id: user._id,isMechanic: user.isMechanic});
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 60 * 60 * 60 * 24,
      withCredentials: true,
    });
    res
      .status(200)
      .json({ message: "User signed in successfully", success: true, user });
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
   next()
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
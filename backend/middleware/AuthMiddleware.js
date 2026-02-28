const User = require("../Models/User/User");
require("dotenv").config();
const jwt = require("jsonwebtoken");


module.exports.userVerification = (req, res) => {
    const token = req.cookies.token
try{
    if (!token) {
      return res.json({ status: false })
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
       return res.json({ status: false })
      } else {

        const user = await User.findById(data.id.id);
        if (user){return( res.json({ status: true, id: user._id,username: user.username,email: user.email,isMec: user.isMechanic  }))}
        else return res.json({ status: false })
      }
    })
  }catch(err) {
    console.log(err);
  }
  }


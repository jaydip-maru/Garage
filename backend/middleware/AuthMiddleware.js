const User = require("../Models/User/User");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  const token = req.cookies.token;

  try {
    if (!token) {
      return res.json({ status: false });
    }

    const data = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await User.findById(data.id.id);

    if (!user) {
      return res.json({ status: false });
    }

    return res.json({
      status: true,
      id: user._id,
      username: user.username,
      email: user.email,
      isMec: user.isMechanic
    });

  } catch (err) {
    console.log(err);
    return res.json({ status: false });
  }
};
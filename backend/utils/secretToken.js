require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id, isMechanic) => {
  return jwt.sign(
    {id,isMechanic},
    process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
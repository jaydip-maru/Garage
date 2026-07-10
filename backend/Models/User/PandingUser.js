const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const pandingUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
  },
  username: {
    type: String,
    required: [true, "Your username is required"],

  },
 
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  isMechanic: {
    type: Boolean,
    default: false
  },

  isVerified: {
    type: Boolean,
    default: false
  },
  otp: String,
  otpExpires: Date
 
});

pandingUserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 12);

});

module.exports = mongoose.model("PandingUser", pandingUserSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("../Models/User/User")

const serviceSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
  ref: "User"
  },
  mechanicId:  {
    type: Schema.Types.ObjectId,
  ref: "User"
  },
  
  problem: String,
  location: String,
  status: {
    type: String,
    default: "pending"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Service", serviceSchema);
const Garage = require("../Models/Garage");
const User = require("../Models/User/User");
const { uploadToCloudinary } = require("../config/cloudinary");

exports.getAllGarage = async (req, res) => {
  const data = await Garage.find({});
  res.json(data);
};


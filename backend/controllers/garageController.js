const Garage = require("../Models/Garage");
const User = require("../Models/User/User");
const { uploadToCloudinary } = require("../config/cloudinary");

exports.getAllGarage = async (req, res) => {
  const data = await Garage.find({});
  res.json(data);
};

exports.createGarage = async (req, res) => {
  const newGarage = new Garage(req.body);
    const user = await User.findById(newGarage.owener);
    if(user.isMechanic) {
    return res.json({ message: "User is already Garage men",success: false });
  
    }
    await user.updateOne({isMechanic: true});
  
    if (req.file.buffer != null) {
      const result = await uploadToCloudinary(req.file.buffer);
      newGarage.url = result.url;
    }
    await newGarage.save();
    return res.json({ message: "Image added successfully",success: true });
};

exports.deleteGarage = async (req, res) => {
   const { id } = req.params;
  
    const deletedGarage = await Garage.findByIdAndDelete({ _id: id });
    const user = await User.findById(deletedGarage.owener);
    await user.updateOne({isMechanic: false});
    
    return res.json({message: "listing was deleted"});
};

exports.getGarageById = async (req, res) => {
  const { id } = req.params;
 
   const deletedGarage = await Garage.findByIdAndDelete({ _id: id });
   const user = await User.findById(deletedGarage.owener);
   await user.updateOne({isMechanic: false});
   
   return res.json({message: "listing was deleted"});
};
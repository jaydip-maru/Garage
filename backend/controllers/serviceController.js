const Service = require("../Models/Service");
const User = require("../Models/User/User");

exports.getServices = async (req, res) => {
   const { id } = req.params;
   const user = await User.findById(id);
   let data = [];
   if(user.isMechanic){
      data = await Service.find({mechanicId: id}).sort({ createdAt: -1 })
   }else{
   console.log(id);
    data = await Service.find({userId: id}).sort({ createdAt: -1 })
   }
  return res.json(data);
};
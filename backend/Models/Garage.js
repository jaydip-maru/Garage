const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User/User")


const GarageSchema = new Schema({
    name: "String",
    url: "String",
    city: "String", 
    dis: "String",
    country: "String",
    type: "String",
    price: "Number",
    location: "String",
    owener: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }

})

Garage =  mongoose.model('Garage', GarageSchema);

module.exports = Garage;
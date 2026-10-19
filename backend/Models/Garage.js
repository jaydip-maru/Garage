const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User/User")


const GarageSchema = new Schema({
    name: {
      type: String,
      required: [true, "Your name is required"]
    },
    url: {
      type: String,
      required: [true, "Your image is required"]
    },
    city: {
      type: String,
      required: [true, "Your city is required"]
    },
    dis: {
      type: String,
      required: [true, "Your distric is required"]
    },
    country: {
      type: String,
      required: [true, "Your country is required"]
    },
    price: {
      type: Number,
      required: [true, "Your price is required"]
    },
    location: {
      type: String,
      required: [true, "Your location is required"]
    },
    owener: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }

})

Garage =  mongoose.model('Garage', GarageSchema);

module.exports = Garage;
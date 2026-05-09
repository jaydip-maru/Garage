if (process.env.NODE_ENV != "producation") {
  require('dotenv').config();
}

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const cookieParser = require('cookie-parser');
const cors = require("cors");


const authRoute = require("./routes/authRoutes");
const garageRoute = require("./routes/garageRoutes");
const serviceRoute = require("./routes/serviceRoutes");
const otpRoute = require("./routes/OtpRoutes");



let url = process.env.MONGO_URI;

mongoose.connect(url).then(() => {
  console.log("connnected to a database");
}).catch((error) => {
  console.log(error);
});


app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(cookieParser());

app.use(cors({
  origin: process.env.VITE_FRONTEND_URL,
  credentials: true
}));


app.use("/auth",authRoute);
app.use("/otp",otpRoute);

app.use("/garage",garageRoute);
app.use("/",serviceRoute);


app.use((err, req, res, next) => {
  let { statusCode = 404, message = "error Occured" } = err;
  console.log(err);
  console.log(err.message);
  return res.json({ message: { err } });
});

module.exports = app;
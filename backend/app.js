if (process.env.NODE_ENV != "producation") {
  require('dotenv').config();
}
const express = require('express')
const app = express();

const warpAsync = require("./utilty/Warper.js")

const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const methodOverride = require("method-override");

//database connection
let url = process.env.MONGO_URI;
mongoose.connect(url).then(() => {
  console.log("connnected to a database");
}).catch((error) => {
  console.log(error);
})

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const Garage = require("./Models/Garage");
const User = require("./Models/User/User.js")

const { uploadToCloudinary } = require("./cloudeConfig.js");

const multer = require('multer')//file uplode 
const upload = multer({ storage: multer.memoryStorage() })
const { createSecretToken } = require("./secretToken.js");
const bcrypt = require("bcryptjs");
const {userVerification} = require("./middleware/AuthMiddleware.js")
const jwt = require("jsonwebtoken");
import cookie from "cookie";
// const garageRouts = require("./router/garageRouts.js")

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const cors = require("cors");

// Socket.io for peer to peer communication
const http = require("http");
const { Server } = require("socket.io");
const Service = require("./Models/Service");

app.use(cors({
  origin: process.env.VITE_FRONTEND_URL,
  credentials: true
}));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.VITE_FRONTEND_URL,
    methods: ["GET", "POST"],
    credentials: true
  },
});


const onlineMechanics = {};
const onlineUsers = {};


io.on('connection', (socket) => {

  const userId = socket.user.id;
  const isMechanic = socket.user.isMechanic;

  if (isMechanic) {
    onlineMechanics[userId] = socket.id;
  } else {
    onlineUsers[userId] = socket.id;
  }


  socket.on("request-mechanic", async (data) => {
    const service = await Service.create({
      userId,
      problem: data.problem
    });

    Object.values(onlineMechanics).forEach((mechanicSocket) => {
      io.to(mechanicSocket).emit("new-service", {
        serviceId: service._id,
        problem: service.problem,
        userId
      });
    });
  });


  socket.on("accept-service", async (data) => {
    await Service.findByIdAndUpdate(data.serviceId, {
      mechanicId: userId,
      status: "accepted"
    });
    
  

    const userSocket = onlineUsers[data.userId];
    if (userSocket) {
      io.to(userSocket).emit("service-confirmed");
    }
  });


  socket.on("reject-service", async (data) => {
    await Service.findByIdAndUpdate(data.serviceId, {
      mechanicId: userId,
      status: "rejected"
    });
  });



  socket.on("disconnect", () => {
    delete onlineMechanics[userId];
    delete onlineUsers[userId];
  });
});







app.get("/", async (req, res) => {
  const allGarage = await Garage.find({});
  
  res.send("Backend is running successfully 🚀");
})
app.post("/verify",userVerification);

app.get("/services/:id", async (req, res) => {
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
})



app.post("/garage", upload.single('url'), warpAsync(async (req, res) => {

  
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
}))

app.get("/garage/:id", async (req, res) => {
  const { id } = req.params;

  const garage = await Garage.findOne({ _id: id });
  res.json(garage);
})

app.delete("/garage/:id", async (req, res) => {
  const { id } = req.params;

  const deletedGarage = await Garage.findByIdAndDelete({ _id: id });
  const user = await User.findById(deletedGarage.owener);
  await user.updateOne({isMechanic: false});
  
  return res.json({message: "listing was deleted"});
})

app.post("/signup", async (req, res, next) => {
  const { email, username, password } = req.body;

  const existUser = await User.findOne({ username });
  const existUser1 = await User.findOne({ email });

  if (existUser || existUser1) {
    return res.json({ message: "user is exist" });
  }

  const user = await User.create({ email, password, username });
  const token = createSecretToken(user._id);
  res.cookie("token", token, {
    withCredentials: true,
    httpOnly: false,
  });
  res
    .status(200)
    .json({ message: "User signed in successfully", success: true, user });
})


app.post("/login", async (req, res, next) => {
try{
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ message: "All field are require" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    console.log(" use not exist");
    return res.json({ message: "Incorect credintioal" });
  }

  const auth = await bcrypt.compare(password, user.password);

  if (!auth) {
    console.log(" use exist but not match");

    return res.json({ message: "Incorect credintioal" });
  }

  const token = createSecretToken({id: user._id,isMechanic: user.isMechanic});
  
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 60 * 60 * 60 * 24,
    withCredentials: true,
 });

  res.status(201).json({ message: "User logged in successfully", success: true,username: user.username, id: user._id, isMec: user.isMechanic});
  next()
} catch(err) {
  console.log(err);
}
});

app.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    withCredentials: true,
  });

  res.status(200).json({ message: "Logged out successfully" });
});


app.use((err, req, res, next) => {
  let { statusCode = 404, message = "error Occured" } = err; //err use ExpressError to get a message from the err
  console.log(err);
  console.log(err.message);
  return res.json({ message: { err } });
  // res.status(statusCode).send(message);
});

io.use((socket, next) => {
  try {
    const cookies = socket.handshake.headers.cookie;

   if (!cookies) return next(new Error("No cookie found"));

   const parsed = cookie.parse(cookies);
   const token = parsed.token;

   if (!token) return next(new Error("No token"));

   try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.user = decoded;
      next();
   } catch (err) {
      next(new Error("Invalid token"));
   }
    next();
  } catch {
    next(new Error("Auth error"));
  }
});

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log("Server running on 8080");
});




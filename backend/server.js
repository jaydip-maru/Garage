const http = require("http");
const { Server } = require("socket.io");

const app = require("./app");
const warpAsync = require("./utils/Warper.js");
const Service = require("./Models/Service");
const jwt = require("jsonwebtoken");

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

io.use((socket, next) => {
  try {
    const cookies = socket.handshake.headers.cookie;
    const parsed = require("cookie").parse(cookies);
    const token = parsed.token;

    if (!token) return next(new Error("No token"));

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    socket.user = decoded;

    next();
  } catch (err) {
    next(new Error("Auth error"));
  }
});

io.on('connection', warpAsync((socket) => {
  console.log("Connected:", socket.user.id.id);

  const userId = socket.user.id.id;
  const isMechanic = socket.user.id.isMechanic;

  console.log(isMechanic)

  if (isMechanic) {
    onlineMechanics[userId] = socket.id;
  } else {
    onlineUsers[userId] = socket.user.id.id;
  }

  socket.on("request-mechanic", warpAsync(async (data) => {
    const service = await Service.create({
      userId,
      problem: data.problem
    });

    Object.values(onlineMechanics).forEach((mechanicSocket) => {
      console.log(mechanicSocket);
      io.to(mechanicSocket).emit("new-service", {
        serviceId: service._id,
        problem: service.problem,
        userId
      });
    });
  }));

  socket.on("accept-service", warpAsync(async (data) => {
    await Service.findByIdAndUpdate(data.serviceId, {
      mechanicId: userId,
      status: "accepted"
    });

    const userSocket = onlineUsers[data.userId];

    if (userSocket) {
      io.to(userSocket).emit("service-confirmed");
    }
  }));

  socket.on("reject-service", warpAsync(async (data) => {
    await Service.findByIdAndUpdate(data.serviceId, {
      mechanicId: userId,
      status: "rejected"
    });
  }));

  socket.on("disconnect", warpAsync(() => {
    delete onlineMechanics[userId];
    delete onlineUsers[userId];
  }));
}));

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log("Server running on 8080");
});
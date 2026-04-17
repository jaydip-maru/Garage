const Service = require("../Models/Service");

const onlineMechanics = {};
const onlineUsers = {};

module.exports = (io) => {
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
 
 
   socket.on("accept-service",warpAsync (async (data) => {
     await Service.findByIdAndUpdate(data.serviceId, {
       mechanicId: userId,
       status: "accepted"
     });
     
   
 
     const userSocket = onlineUsers[data.userId];
     if (userSocket) {
       io.to(userSocket).emit("service-confirmed");
     }
   }));
 
 
   socket.on("reject-service",warpAsync( async (data) => {
     await Service.findByIdAndUpdate(data.serviceId, {
       mechanicId: userId,
       status: "rejected"
     });
   }));
 
 
 
   socket.on("disconnect",warpAsync( () => {
     delete onlineMechanics[userId];
     delete onlineUsers[userId];
   }));
 }));
};
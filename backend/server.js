const app = require("./app");
const http = require("http");

const initSocket = require("./sockets/socket");

const server = http.createServer(app);


initSocket(server);

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log("Server running on 8080");
});
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

// Invoke the cors middleware
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // This should match your React app's port
    methods: ["GET", "POST"],
  },
});

// Set up a Socket.IO connection handler
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  // Example: listening for a message event from the client
  socket.on("message", (message) => {
    console.log(message);
    // You can also emit messages to the client
    io.emit("message", message);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// const express = require("express");
// const app = express();
// const http = require("http");
// const { Server } = require("socket.io");
// const cors = require("cors");

// app.use(cors);
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

// server.listen(3001, () => {
//   console.log("server is running");
// });

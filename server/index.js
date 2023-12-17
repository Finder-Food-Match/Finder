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
const likedRestaurants = new Set();
io.on("connection", (socket) => {
  console.log(`A user connected ${socket.id}`);

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  socket.on("restaurant_clicked", (restaurant) => {
    console.log("Restaurant clicked:", restaurant.name);
    if (likedRestaurants.has(restaurant.name)) {
      console.log("Duplicate found");
      likedRestaurants.clear();
    } else {
      likedRestaurants.add(restaurant.name);
    }
    socket.broadcast.emit("restaurant_clicked", restaurant);
  });

  // Other existing socket event handlers...
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});


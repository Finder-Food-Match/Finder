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
const rooms = {}; // Stores room information

io.on("connection", (socket) => {
  console.log(`A user connected ${socket.id}`);

  socket.on("create_lobby", (user) => {
    const roomCode = generateRoomCode();
    rooms[roomCode] = { users: [user], roomCode };
    socket.join(roomCode);
    io.to(roomCode).emit("room_update", rooms[roomCode]);
  });

  socket.on("join_lobby", ({ roomCode, user }) => {
    if (rooms[roomCode]) {
      rooms[roomCode].users.push(user);
      socket.join(roomCode);
      io.to(roomCode).emit("room_update", rooms[roomCode]);
    } else {
      socket.emit("error", "Room not found");
    }
  });
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  socket.on("restaurant_clicked", (restaurant) => {
    console.log("Restaurant clicked:", restaurant.name);
    //adds to likedRestaurants if no duplicate is found
    if (likedRestaurants.has(restaurant.name)) {
      console.log("Duplicate found");
      io.emit("duplicate_restaurant", restaurant.name); // Emit to all clients
      likedRestaurants.clear();
    } else {
      likedRestaurants.add(restaurant.name);
    }
    socket.broadcast.emit("restaurant_clicked", restaurant);
  });

  // Other existing socket event handlers...
});
function generateRoomCode() {
  let result = "";
  const characters = "0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

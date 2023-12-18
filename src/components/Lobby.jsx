import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

import RestaurantCard from "../components/RestaurantCard"; // Adjust this import based on your project structure
import Notification from "../components/Notification"; // Import or define this component

import Navbar from "../components/Navbar";
import io from "socket.io-client";
const socket = io("http://localhost:3001");
function Lobby() {
  const location = useLocation();
  const { users, roomCode } = location.state;

  const [notification, setNotification] = useState("");
  const handleRestaurantClick = (likedRestaurant) => {
    socket.emit("restaurant_clicked", likedRestaurant);
  };
  //closes notification
  const closeNotification = () => {
    setNotification("");
  };
  useEffect(() => {
    socket.on("restaurant_update", (restaurant) => {
      console.log("Restaurant clicked:", restaurant);
    });
    socket.on("duplicate_restaurant", (restaurantName) => {
      setNotification(`Duplicate found for ${restaurantName}`);
      // Optionally, clear the notification after a delay
      //setTimeout(() => setNotification(''), 3000); // Clears after 3 seconds
    });
    return () => {
      socket.off("restaurant_update");
      socket.off("duplicate_restaurant");
    };
  }, []);

  return (
    <>
      <div>
        <h1>Lobby: {roomCode}</h1>
        <h2>Users in Lobby:</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
        {/* Additional lobby functionality */}
      </div>
      <div>
        {notification && (
          <Notification message={notification} onClose={closeNotification} />
        )}
        <RestaurantCard handleRestaurantClick={handleRestaurantClick} />
        {/* other components */}
        <Navbar />
      </div>
    </>
  );
}

export default Lobby;

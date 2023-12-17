import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import RestaurantCard from "../components/RestaurantCard"; // Adjust this import based on your project structure
import Notification from "../components/Notification"; // Import or define this component
const socket = io("http://localhost:3001");

function SampleLobby({ ResturantCard,handleSomething }) {
  const [notification, setNotification] = useState('');
  const handleRestaurantClick = (likedRestaurant) => {
    socket.emit("restaurant_clicked", likedRestaurant);
  };
  //closes notification
  const closeNotification = () => {
    setNotification('');
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
      <div>
        {notification && <Notification message={notification} onClose={closeNotification} />}
        <RestaurantCard handleRestaurantClick={handleRestaurantClick} />
        {/* other components */}
      </div>
  );
}

export default SampleLobby;

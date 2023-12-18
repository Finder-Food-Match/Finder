import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import RestaurantCard from "../components/RestaurantCard"; // Adjust this import based on your project structure
import Notification from "../components/Notification"; // Import or define this component
const socket = io("http://localhost:3001");

function SampleLobby() {
  const [notification, setNotification] = useState('');
  // Add state for restaurant details (name, description, etc.)
  const [restaurant, setRestaurant] = useState({
    name: "Restaurant Name",
    description: "Small description about the restaurant.",
    // Add your image URL here
    imageUrl: "path/to/image.jpg"
  });

  const handleRestaurantClick = (likedRestaurant) => {
    socket.emit("restaurant_clicked", likedRestaurant);
  };

  const closeNotification = () => {
    setNotification('');
  };

  // Similar useEffect for socket events...

  return (
    <div className="sample-lobby-container">
      {notification && <Notification message={notification} onClose={closeNotification} />}
      
      <div className="restaurant-card">
        <h1 className="restaurant-name">{restaurant.name}</h1>
        <img src={restaurant.imageUrl} alt={restaurant.name} className="restaurant-image"/>
        <p className="restaurant-description">{restaurant.description}</p>

        <div className="action-buttons">
          <button className="dislike-btn" onClick={() => handleRestaurantClick('dislike')}>Dislike</button>
          <button className="like-btn" onClick={() => handleRestaurantClick('like')}>Like</button>
        </div>
      </div>

      {/* Other components... */}
    </div>
  );
}

export default SampleLobby;

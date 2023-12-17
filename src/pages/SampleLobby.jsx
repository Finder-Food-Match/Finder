import React, { useEffect } from "react";
import io from "socket.io-client";
import RestaurantCard from "../components/RestaurantCard"; // Adjust this import based on your project structure

const socket = io("http://localhost:3001");

function SampleLobby({ ResturantCard,handleSomething }) {
  const handleRestaurantClick = (likedRestaurant) => {
    socket.emit("restaurant_clicked", likedRestaurant);
  };

  useEffect(() => {
    socket.on("restaurant_update", (restaurant) => {
      console.log("Restaurant clicked:", restaurant);
    });

    return () => {
      socket.off("restaurant_update");
    };
  }, []);

  return (
      <div>
        <RestaurantCard handleRestaurantClick={handleRestaurantClick} />
        {/* other components */}
      </div>
  );
}

export default SampleLobby;

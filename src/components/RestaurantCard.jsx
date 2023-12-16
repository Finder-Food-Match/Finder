import React from "react";
import RestaurantList from "../assets/Restaurants";
import { useState } from "react";

function RestaurantCard() {
  const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(0);

  const showNextRestaurant = () => {
    setCurrentRestaurantIndex(
      (prevIndex) => (prevIndex + 1) % RestaurantList.length
    );
  };

  const showPreviousRestaurant = () => {
    setCurrentRestaurantIndex((prevIndex) =>
      prevIndex === 0 ? RestaurantList.length - 1 : prevIndex - 1
    );
  };

  const currentRestaurant = RestaurantList[currentRestaurantIndex];

  return (
    <div className="card">
      <img src="" alt="" />
      <h1>{currentRestaurant.name}</h1>
      <p>{currentRestaurant.description}</p>
      <p>{currentRestaurant.rating}</p>
      <p>{currentRestaurant.location}</p>
      <div className="navigation-buttons">
        <button className="likeBtn" onClick={showNextRestaurant}>
          Dislike
        </button>
        <button className="dislikeBtn" onClick={showNextRestaurant}>
          Like
        </button>
      </div>
    </div>
  );
}

export default RestaurantCard;

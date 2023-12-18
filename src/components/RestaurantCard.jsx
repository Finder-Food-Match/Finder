import React from "react";
import RestaurantList from "../assets/Restaurants";
import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import SampleLobby from "../pages/SampleLobby";

function RestaurantCard({ handleRestaurantClick }) {
  const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(0);

  const showNextRestaurant = () => {
    setCurrentRestaurantIndex(
      (prevIndex) => (prevIndex + 1) % RestaurantList.length
    );
  };

  const showNextLikedRestaurant = () => {
    setCurrentRestaurantIndex(
      (prevIndex) => (prevIndex + 1) % RestaurantList.length
    );

    handleRestaurantClick(currentRestaurant);
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
        <div className="BtnContainer">
          <button className="dislikeBtn" onClick={showNextRestaurant}>
            <div className="btnIcons">
              <FaTimes size={25} />
            </div>
          </button>
          <button className="likeBtn" onClick={showNextLikedRestaurant}>
            <div className="btnIcons">
              <FaCheck size={25} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
// import React, { useEffect, useState } from "react";
// import io from "socket.io-client";
// import RestaurantCard from "../components/RestaurantCard"; // Adjust this import based on your project structure
// import Notification from "../components/Notification"; // Import or define this component
// import Navbar from "../components/Navbar";
// const socket = io("http://localhost:3001");

// function SampleLobby({ ResturantCard, handleSomething }) {
//   const [notification, setNotification] = useState("");
//   const handleRestaurantClick = (likedRestaurant) => {
//     socket.emit("restaurant_clicked", likedRestaurant);
//   };

//   const closeNotification = () => {
//     setNotification("");
//   };

//   // Similar useEffect for socket events...

//   return (
//     <div>
//       {notification && (
//         <Notification message={notification} onClose={closeNotification} />
//       )}
//       <RestaurantCard handleRestaurantClick={handleRestaurantClick} />
//       {/* other components */}
//     </div>
//   );
// }

// export default SampleLobby;

import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import ResturantList from "../assets/Restaurants";

const socket = io("http://localhost:3001");

function SampleLobby({ RestaurantCard, handleSomething }) {
  //calling from RL
  const handleRestaurantClick = (restaurantData) => {
    console.log("Restaurant clicked:", restaurantData);
    // Further processing...
  };

  return (
    <div>
      <RestaurantCard handleRestaurantClick={handleRestaurantClick} />
      {/* other components */}
    </div>
  );
  //react state and hooks
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  //emitting messages from socket.io
  const sendMessage = () => {
    socket.emit("send_message", message);
    setMessage(message);
  };
  //console.log
  console.log("these are chats", chat);
  //message content and setStates
  const onChange = (e) => {
    let sampleChat = e.target.value;
    setMessage(sampleChat);
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  return (
    <div>
      <RestaurantCard handleSomething={handleSomething} />
    </div>
  );
}

export default SampleLobby;

{
  /* <div>
      <h1>Simple Chat</h1>
      <input type="text" value={message} onChange={onChange} />
      <button onClick={sendMessage}>Send</button>
      </div> */
}

{
  /* {chat.map((msg, index) => (
          <div className="messageCard">
            <p key={index}>{msg}</p>
          </div>
        ))} */
}

import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

function SampleLobby() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  console.log("these are chats", chat);
  const onChange = (e) => {
    let sampleChat = e.target.value;
    setMessage(sampleChat);
  };
  useEffect(() => {
    socket.on("receiveMessage", (msg) => {
      setChat((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("sendMessage", message);
    setMessage("");
  };

  return (
    <div>
      <h1>Simple Chat</h1>
      <input type="text" value={message} onChange={onChange} />
      <button onClick={sendMessage}>Send</button>
      <div>
        {chat.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
}

export default SampleLobby;

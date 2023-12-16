// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";
// //import io

// //const socket = io("http://localhost:3000");

// function SampleLobby() {
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   useEffect(() => {
//     socket.on("receiveMessage", (msg) => {
//       setChat((prev) => [...prev, msg]);
//     });

//     return () => {
//       socket.off("receiveMessage");
//     };
//   }, []);

//   const sendMessage = () => {
//     socket.emit("sendMessage", message);
//     setMessage("");
//   };

//   return (
//     <div>
//       <h1>Simple Chat</h1>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button onClick={sendMessage}>Send</button>
//       <div>
//         {chat.map((msg, index) => (
//           <p key={index}>{msg}</p>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SampleLobby;

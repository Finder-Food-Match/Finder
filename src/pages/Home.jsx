import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

function Home() {
    const navigate = useNavigate();
    const { isLoaded, isSignedIn, user } = useUser();
    const [roomCode, setRoomCode] = useState("");

    const createLobby = () => {
        socket.emit("create_lobby", user.fullName);
        socket.on("room_update", (roomInfo) => {
            navigate(`/lobby/${roomInfo.roomCode}`, { state: roomInfo });
        });
    };

    const joinLobby = () => {
        socket.emit("join_lobby", { roomCode, user: user.fullName });
        socket.on("room_update", (roomInfo) => {
            navigate(`/lobby/${roomInfo.roomCode}`, { state: roomInfo });
        });
        socket.on("error", (errorMessage) => {
            console.error(errorMessage);
            // Handle error (show message to user, etc.)
        });
    };

    return (
        <>
            <div className="homepageContainer">
                <h1>Welcome to Home Page {user.fullName} </h1>
                <div className="profile-container">
                    <UserButton />
                </div>
                <div className="homeBtnContainer">
                    <button className="homeBtn" onClick={createLobby}>
                        Create Lobby
                    </button>
                    <input
                        type="text"
                        value={roomCode}
                        onChange={(e) => setRoomCode(e.target.value)}
                        placeholder="Enter Room Code"
                    />
                    <button className="homeBtn" onClick={joinLobby}>
                        Join Lobby
                    </button>
                </div>
            </div>
            {/* Rest of your code */}
        </>
    );
}

export default Home;

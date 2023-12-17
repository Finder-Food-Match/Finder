import React from "react";
import { useLocation } from "react-router-dom";

function Lobby() {
    const location = useLocation();
    const { users, roomCode } = location.state;

    return (
        <div>
            <h1>Lobby: {roomCode}</h1>
            <h2>Users in Lobby:</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
            {/* Additional lobby functionality */}
        </div>
    );
}

export default Lobby;

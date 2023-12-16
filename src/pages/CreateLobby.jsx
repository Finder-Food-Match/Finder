import Navbar from "../components/Navbar";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function CreateLobby() {
  const { isLoaded, isSignedIn, user } = useUser();
  const navigate = useNavigate();
  return (
    <div className="CreateLobbyContainer">
      <h1>Ready to find your restaurant match {user.fullName}?</h1>
      <div className="homeBtnContainer"></div>
      <Navbar />
    </div>
  );
}

export default CreateLobby;

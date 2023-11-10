import Navbar from "../components/Navbar";
import { UserButton, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    <>
      <div className="homepageContainer">
        <h1>Welcome to Home Page {user.fullName} </h1>
        <div className="profile-container">
          <UserButton />
        </div>
        <div className="homeBtnContainer">
          <button className="homeBtn">Swipe</button>
          <button className="homeBtn" onClick={() => navigate("/profile")}>
            Profile
          </button>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default Home;

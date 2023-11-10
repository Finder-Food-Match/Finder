import {
  SignedIn,
  SignedOut,
  UserButton,
  RedirectToSignIn,
  SignOutButton,
  UserProfile,
} from "@clerk/clerk-react";
import Navbar from "../components/Navbar";

function Profile() {
  return (
    <div>
      <UserProfile />

      <Navbar />
    </div>
  );
}

export default Profile;

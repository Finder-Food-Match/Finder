import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Liked from "./pages/Liked";
import Profile from "./pages/Profile";
import SampleLobby from "./pages/SampleLobby";
import RestaurantCard from "./components/RestaurantCard";
import CreateLobby from "./pages/CreateLobby";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import Lobby from "./components/Lobby";

function App() {
  const handleSomething = () => {
    console.log("Function called from RestaurantCard");
    // Additional logic...
  };
  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
  if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }
  return (
    <div className="App">
      <ClerkProvider publishableKey={clerkPubKey}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SignedIn>
                    <Home />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <SignedIn>
                    <Profile />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
            <Route
              path="/liked"
              element={
                <>
                  <SignedIn>
                    <Liked />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
            <Route
              path="/lobby/:roomCode"
              element={
                <>
                  <SignedIn>
                    <Lobby />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
            <Route path="/samplelobby" element={<></>} />
            <Route
              path="/CreateLobby"
              element={
                <>
                  <SignedIn>
                    <CreateLobby />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
          </Routes>
        </Router>
      </ClerkProvider>
    </div>
  );
}

export default App;
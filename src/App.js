import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Liked from "./pages/Liked";
import Profile from "./pages/Profile";
<<<<<<< HEAD
import SampleLobby from "./pages/SampleLobby";
=======
import CreateLobby from "./pages/CreateLobby";
>>>>>>> 4ef7359cdd743767f5879b80ba550c6f2120879e
import {
  ClerkProvider,
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

function App() {
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
<<<<<<< HEAD
              path="/samplelobby"
              element={
                <>
                  <SignedIn>
                    <SampleLobby />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
=======
                path="/CreateLobby"
                element={
                  <>
                    <SignedIn>
                      <CreateLobby/>
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                }
>>>>>>> 4ef7359cdd743767f5879b80ba550c6f2120879e
            />
          </Routes>
        </Router>
      </ClerkProvider>
    </div>
  );
}

export default App;

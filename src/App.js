import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import { ClerkProvider, SignIn } from "@clerk/clerk-react";
function App() {
  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
  return (
    <div className="App">
      <ClerkProvider publishableKey={clerkPubKey}>
        <Router>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </ClerkProvider>
    </div>
  );
}

export default App;

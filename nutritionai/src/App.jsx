import "./App.css";
import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Routes, Route, Navigate } from "react-router-dom";

import Upload from "./components/Upload.jsx";
import Home from "./components/Home.jsx";
import Profile from "./components/Profile.jsx";
import SignedOutPage from "./components/SignedOutPage.jsx";
import SearchFriends from "./components/SearchFriends.jsx";
import FriendsMeals from "./components/FriendsMeals.jsx";
import Tracking from "./components/Tracking.jsx";
import { SignIn, SignUp } from "@clerk/clerk-react";

function App() {
  const { isSignedIn } = useUser();

  return (
    <Routes>
      <Route path="/" element={isSignedIn ? <Home /> : <SignedOutPage />} />
      <Route path="/sign-in/*" element={<SignIn />} />
      <Route path="/sign-up/*" element={<SignUp />} />
      <Route path="/upload" element={<Upload />} />
      <Route
        path="/profile"
        element={isSignedIn ? <Profile /> : <Navigate to="/" />}
      />
      <Route
        path="/add-friends"
        element={isSignedIn ? <SearchFriends /> : <Navigate to="/" />}
      />
      <Route
        path="/friends-meals"
        element={isSignedIn ? <FriendsMeals /> : <Navigate to="/" />}
      />
      <Route
        path="/tracking"
        element={isSignedIn ? <Tracking /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;

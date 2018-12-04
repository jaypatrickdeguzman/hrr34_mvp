import React, { createContext } from "react";
import { useState, useEffect } from "react";
import Container from "./Container";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import UserLike from "./UserLike";

export const UserContext = createContext({
  _id: "",
  description: "",
  location: "",
  name: "",
  age: "",
  likes: 0
});

function App() {
  const [appState, setAppState] = useState("Login");
  const [profiles, setProfiles] = useState([]);
  const [currentProfile, setNextCurrentProfile] = useState({});
  return (
    <div className="pa3">
      <Container>{renderApp(appState, setAppState)}</Container>
    </div>
  );
}

function renderApp(state, setAppState) {
  switch (state) {
    case "SignUp":
      return <SignUp setAppState={setAppState} />;
    case "Login":
      return <Login setAppState={setAppState} />;
    case "Profile":
      return <Profile setAppState={setAppState} />;
    case "UserLikePage":
      return <UserLike setAppState={setAppState} />;
      return;
    default:
      console.error("Something is fucked...");
  }
}

export default App;

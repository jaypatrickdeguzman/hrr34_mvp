import React, { createContext, useState, useEffect } from "react";
import Container from "./Container";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import UserLike from "./UserLike";
import networkReq from "../lib/signin";

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
  const [userProfile, setUserProfile] = useState({
    _id: "",
    avatar: "",
    username: "",
    password: "",
    name: "",
    age: "",
    location: "",
    description: ""
  });
  const [currentMatchIndex, setMatchIndex] = useState(0);
  const [currentMatchProfile, setMatchProfile] = useState({
    _id: "",
    avatar: "",
    username: "",
    password: "",
    name: "",
    age: "",
    location: "",
    description: ""
  });

  // Pretty hackyy
  useEffect(
    () => {
      networkReq.get("/getmatches").then(resp => {
        // console.log(resp.data);
        setProfiles(resp.data);
      });
    },
    [profiles.length]
  );

  return (
    <div className="pa3">
      <Container>
        {renderApp(
          appState,
          setAppState,
          userProfile,
          setUserProfile,
          profiles,
          currentMatchIndex,
          setMatchIndex,
          currentMatchProfile,
          setMatchProfile
        )}
      </Container>
    </div>
  );
}

function renderApp(
  state,
  setAppState,
  userProfile,
  setUserProfile,
  profiles,
  currentMatchIndex,
  setMatchIndex,
  currentMatchProfile,
  setMatchProfile
) {
  switch (state) {
    case "SignUp":
      return (
        <SignUp setAppState={setAppState} setUserProfile={setUserProfile} />
      );
    case "Login":
      return (
        <Login setAppState={setAppState} setUserProfile={setUserProfile} />
      );
    case "UserProfile":
      return <Profile setAppState={setAppState} profile={userProfile} />;
    case "MatchProfile":
      return (
        <Profile setAppState={setAppState} profile={currentMatchProfile} />
      );
    case "UserLikePage":
      return (
        <UserLike
          setAppState={setAppState}
          profiles={profiles}
          index={currentMatchIndex}
          setMatchIndex={setMatchIndex}
          setMatchProfile={setMatchProfile}
        />
      );
      return;
    default:
      console.error("Something is fucked...");
  }
}

export default App;

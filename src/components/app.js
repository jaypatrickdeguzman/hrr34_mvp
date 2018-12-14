import React, {
  createContext,
  useState,
  useEffect,
  lazy,
  Suspense
} from "react";
import Container from "./Container";
import Profile from "./Profile";
import Loader from "./Loader";
const Login = lazy(() => import("./Login"));
const SignUp = lazy(() => import("./SignUp"));
const UserLike = lazy(() => import("./UserLike"));
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
        <Suspense fallback={<Loader />}>
          <SignUp setAppState={setAppState} setUserProfile={setUserProfile} />
        </Suspense>
      );
    case "Login":
      return (
        <Suspense fallback={<Loader />}>
          <Login setAppState={setAppState} setUserProfile={setUserProfile} />
        </Suspense>
      );
    case "UserProfile":
      return (
        <Suspense fallback={<Loader />}>
          <Profile setAppState={setAppState} profile={userProfile} />
        </Suspense>
      );
    case "MatchProfile":
      return (
        <Suspense fallback={<Loader />}>
          <Profile setAppState={setAppState} profile={currentMatchProfile} />
        </Suspense>
      );
    case "UserLikePage":
      return (
        <Suspense fallback={<Loader />}>
          <UserLike
            setAppState={setAppState}
            profiles={profiles}
            index={currentMatchIndex}
            setMatchIndex={setMatchIndex}
            setMatchProfile={setMatchProfile}
          />
        </Suspense>
      );
      return;
    default:
      console.error("State incorrect");
  }
}

export default App;

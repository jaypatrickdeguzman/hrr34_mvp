import React, { createContext } from "react";
import { useState, useEffect } from "react";
import Container from "./Container";
import Login from "./Login";
import SignUp from "./SignUp";

export const UserContext = createContext({
  _id: "",
  description: "",
  location: "",
  name: "",
  age: "",
  sex: "",
  preference: "",
  likes: 0
});

const App = () => {
  return (
    <div className="pa5">
      <Container>
        <SignUp />
      </Container>
    </div>
  );
};

export default App;

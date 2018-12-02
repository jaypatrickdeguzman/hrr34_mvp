import React, { createContext } from "react";
import { useState, useEffect } from "react";
import Container from "./Container";
import Login from "./Login/Login";

export const UserContext = createContext({
  _id: "",
  description: "",
  location: "",
  name: "",
  age: "",
  sex: "",
  preference: "",
  likes: ""
});

const App = () => {
  return (
    <div className="pa5">
      <Container>
        <Login />
      </Container>
    </div>
  );
};

export default App;

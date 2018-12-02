import React, { createContext } from "react";
import { useState, useEffect } from "react";

import Container from "./Container";
import Login from "./Login/Login";

export const UserContext = createContext({
  _id: "",
  description: String,
  location: String,
  name: String,
  age: Number,
  sex: String,
  preference: String,
  likes: Number
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

import React from "react";
import { useState } from "react";

import Container from "./Container";
import Login from "./Login/Login";

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

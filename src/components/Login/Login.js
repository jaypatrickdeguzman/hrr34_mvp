import React from "react";
import { useState } from "react";

const Login = ({ setUser }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(e) {
    setUserName(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <React.Fragment>
      <main className="pa4 black-80">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6">Username</label>
              <input
                value={userName}
                onChange={handleUsernameChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6">Password</label>
              <input
                value={password}
                onChange={handlePasswordChange}
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              />
            </div>
            <br />
            <br />
            <div className="">
              <input
                className="b ph1 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib"
                value="Sign in"
              />
            </div>
          </fieldset>
          <div class="1h-copy mt2">
            <a href="#0" className="f5 link dim black db">
              Sign Up
            </a>
          </div>
        </form>
      </main>
    </React.Fragment>
  );
};

export default Login;

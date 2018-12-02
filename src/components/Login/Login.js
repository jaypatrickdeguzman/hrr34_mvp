import React from "react";
import { useState } from "react";
import login from "../../lib/signin";

const Login = ({ setUser, goToSignUp }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isUserExist, setIsUserExist] = useState("true");

  function handleUsernameChange(e) {
    setUserName(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function onSignInSubmit(e) {
    e.preventDefault();
    const resp = await login.get("/login", {
      params: { userName, password }
    });
    resp.status === 404 ? setIsUserExist(false) : setUser(resp.user);
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
                type="password"
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              />
            </div>
            <br />
            <br />
            <div className="">
              <a
                onClick={onSignInSubmit}
                className="f6 link dim ba ph3 pv2 mb2 dib black grow pointer"
                href="#0"
              >
                Sign In
              </a>
            </div>
          </fieldset>
          <div className="1h-copy mt2">
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

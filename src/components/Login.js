import React, { useState } from "react";
import formInput from "./hooks/FormInput";
import login from "../lib/signin";

function Login({ setUserProfile, setAppState }) {
  const username = formInput("");
  const password = formInput("");

  function onSignInSubmit(e) {
    e.preventDefault();
    login
      .post("/login", {
        body: { userName: username.value, password: password.value }
      })
      .then(resp => {
        setUserProfile(resp.data);
        setAppState("UserLikePage");
      });
    console.log(`Username: ${username.value}, Password: ${password.value}`);
    // resp.status === 404 ? setIsUserExist(false) : setUser(resp.user);
  }

  return (
    <React.Fragment>
      <main className="pa4 black-80 dark-blue">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f4">Username</label>
              <input
                value={username.value}
                onChange={username.handleChange}
                className="pa2 input-reset ba bg-transparent hover-bg-washed-red hover-white w-100"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f4">Password</label>
              <input
                value={password.value}
                onChange={password.handleChange}
                className="pa2 input-reset ba bg-transparent hover-bg-washed-red hover-white w-100"
              />
            </div>
            <br />
            <br />
            <div className="">
              <a
                onClick={onSignInSubmit}
                className="f4 link dim ba br4 ph3 pv2 mb2 dib black grow pointer dark-blue"
                href="#0"
              >
                Sign In
              </a>
            </div>
          </fieldset>
          <div className="1h-copy mt2">
            <a
              onClick={() => {
                setAppState("SignUp");
              }}
              href="#0"
              className="f4 link dim black db dark-blue"
            >
              Sign Up
            </a>
          </div>
        </form>
      </main>
    </React.Fragment>
  );
}

export default React.memo(Login);

import React, { useState } from "react";
import login from "../../lib/signin";

const Login = ({ setUser, goToSignUp }) => {
  const username = useFormInput("");
  const password = useFormInput("");

  function onSignInSubmit(e) {
    e.preventDefault();
    //   login
    //     .get("/login", {
    //       body: { userName, password }
    //     })
    //     .then(resp => {
    //       console.log(resp);
    //     });
    console.log(`Username: ${username.value}, Password: ${password.value}`);
    // resp.status === 404 ? setIsUserExist(false) : setUser(resp.user);
  }

  return (
    <React.Fragment>
      <main className="pa4 black-80 dark-blue">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6">Username</label>
              <input
                value={username.value}
                onChange={username.handleChange}
                className="pa2 input-reset ba bg-transparent hover-bg-washed-red hover-white w-100"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6">Password</label>
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
                className="f6 link dim ba ph3 pv2 mb2 dib black grow pointer dark-blue"
                href="#0"
              >
                Sign In
              </a>
            </div>
          </fieldset>
          <div className="1h-copy mt2">
            <a href="#0" className="f5 link dim black db dark-blue">
              Sign Up
            </a>
          </div>
        </form>
      </main>
    </React.Fragment>
  );
};

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return { value: value, handleChange: handleChange };
}

export default React.memo(Login);

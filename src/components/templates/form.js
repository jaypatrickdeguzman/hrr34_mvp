import React from "react";
import networkReq from "../../lib/signin";
import Faker from "faker/locale/en";

function Form(props) {
  return returnForm(props);
}

function returnForm({
  value,
  state,
  index,
  setIndex,
  setAppState,
  setUserProfile
}) {
  return index > 5 ? (
    summary(state, value, setAppState, setUserProfile)
  ) : (
    <React.Fragment>
      <main className="pa4 black-80 dark-blue">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0 center">
              {value[index].question}
            </legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6">{value[index].label}</label>
              <input
                value={state[index].value}
                onChange={state[index].handleChange}
                className="pa2 input-reset ba bg-transparent hover-bg-washed-red hover-white w-100"
              />
            </div>
            <br />
            <br />
            <div className="fl">
              {index !== 0 ? (
                <a
                  onClick={() => {
                    setIndex(index - 1);
                  }}
                  className="f6 link dim ba br4 ph3 pv2 mb2 dib black grow pointer dark-blue"
                  href="#0"
                >
                  Previous
                </a>
              ) : null}
            </div>
            <div className="fr">
              <a
                onClick={() => {
                  setIndex(index + 1);
                }}
                className="f6 link dim ba br4 ph3 pv2 mb2 dib black grow pointer dark-blue"
                href="#0"
              >
                Next
              </a>
            </div>
          </fieldset>
        </form>
      </main>
    </React.Fragment>
  );
}

function summary(state, value, setAppState, setUserProfile) {
  return (
    <React.Fragment>
      <main className="pa3 black-80 dark-blue">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0 center">Summary</legend>
            <ul className="list pl0">
              {state.map((element, index) => {
                return (
                  <li key={index} className="pa3 pa3-ns bb b--black-10">
                    <b className="db f3 mb1">{value[index].label}</b>
                    <span className="f4 db lh-copy measure">
                      {element.value}
                    </span>
                  </li>
                );
              })}
            </ul>
          </fieldset>
          <fieldset className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0 center">
              <a
                onClick={e => {
                  signUp(e, state, setAppState, setUserProfile);
                }}
                className="f4 link dim ba br4 ph3 pv2 center mb2 dib black grow pointer dark-blue"
                href="#0"
              >
                Sign Up
              </a>
            </legend>
          </fieldset>
        </form>
      </main>
    </React.Fragment>
  );
}

function signUp(e, payload, setAppState, setUserProfile) {
  e.preventDefault();
  const load = {
    avatar: Faker.image.avatar(),
    username: payload[0].value,
    password: payload[1].value,
    name: payload[2].value,
    age: payload[3].value,
    location: payload[4].value,
    description: payload[5].value
  };
  networkReq
    .post("/newuser", {
      body: load
    })
    .then(resp => {
      setUserProfile(resp.data);
      setAppState("UserLikePage");
    });
}

/*
      <header className="tc pv4 ph4 pv3-ns">
        <a
          className="f3 grow link dim fl br4 ba ph3 pv2 mb2 mid-gray"
          href="#0"
        >
          Back
        </a>
        <a
          className="f3 grow link dim fr br4 ba ph3 pv2 mb2 mid-gray"
          href="#0"
        >
          Delete
        </a>
      </header>
*/

export default Form;

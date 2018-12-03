import React, { useState } from "react";
import formInput from "./hooks/FormInput";

function SignUp() {
  const [index, setIndex] = useState(0);
  const { value, state } = useSignUpState(index);
  return (
    <React.Fragment>
      <main className="pa4 black-80 dark-blue">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0 center">{value.question}</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6">{value.label}</label>
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
                  className="f6 link dim ba ph3 pv2 mb2 dib black grow pointer dark-blue"
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
                className="f6 link dim ba ph3 pv2 mb2 dib black grow pointer dark-blue"
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

function summary() {
  return (
    <div>
      <div>Summary</div>
    </div>
  );
}

const signUpConfig = [
  { label: "Name", question: "What is your name?" },
  { label: "Age", question: "How old are you?" },
  { label: "Preference", question: "Do you have a preference?" },
  { label: "Location", question: "Where are you located?" },
  { label: "Description", question: "Tell us a little about yourself..." },
  { label: "Summary" }
];

/* ----------------------------- */
/*   Initialize our form hooks   */
/* ----------------------------- */

function useSignUpState(index) {
  const name = formInput("");
  const age = formInput("");
  const preference = formInput("");
  const location = formInput("");
  const description = formInput("");

  const stateArr = [name, age, preference, location, description];

  return {
    value: signUpConfig[index],
    state: stateArr
  };
}

export default SignUp;

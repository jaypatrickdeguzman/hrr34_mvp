import React, { useState } from "react";
import formInput from "./hooks/FormInput";
import Form from "./templates/form";

function SignUp() {
  const [index, setIndex] = useState(0);
  const { value, state } = useSignUpState(index);
  return <Form value={value} state={state} index={index} setIndex={setIndex} />;
}

/* ----------------------------- */
/*   Initialize our form hooks   */
/* ----------------------------- */

function useSignUpState(index) {
  const userName = formInput("");
  const password = formInput("");
  const name = formInput("");
  const age = formInput("");
  const location = formInput("");
  const description = formInput("");

  const stateArr = [userName, password, name, age, location, description];

  return {
    value: signUpConfig,
    state: stateArr
  };
}

const signUpConfig = [
  { label: "Username", question: "Please setup a username." },
  { label: "Password", question: "Please setup a password." },
  { label: "Name", question: "What is your name?" },
  { label: "Age", question: "How old are you?" },
  { label: "Location", question: "Where are you located?" },
  { label: "Quote", question: "What is your favorite quote?" }
];

export default SignUp;

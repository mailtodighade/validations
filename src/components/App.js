import React from "react";
import { Form, Field } from "react-final-form";

import Signup from "./Signup";
const App = () => {
  const onSubmit = (e) => {
    console.log(e, "form submit...");
  };

  const validate = (e) => {
    const regexPhoneNumber = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    const error = {};
    if (e.lastName && e.lastName.length < 4) {
      error.lastName = "too short";
    }
    if (!(e.phone && regexPhoneNumber.test(e.phone))) {
      error.phone = "invalid num";
    }
    return error;
  };

  return (
    <div>
      {/* <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>first name:</label>
              <Field
                name="firstName"
                placeholder="enter your name"
                component="input"
              />
            </div>
            <h2>last name validation....</h2>
            <Field
              name="lastName"
              render={({ input, meta }) => (
                <div>
                  <label>Last Name: </label>
                  <input {...input} />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />

            <h2>Phone number validation....</h2>
            <Field
              name="phone"
              type="text"
              render={({ input, meta }) => (
                <div>
                  <label>phone number: </label>
                  <input {...input} />

                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />

            <button type="submit">Submit</button>
          </form>
        )}
      ></Form> */}
      <Signup />
    </div>
  );
};

export default App;

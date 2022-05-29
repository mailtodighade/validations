import React from "react";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";

const Signup = () => {
  const onSubmit = (e) => {
    localStorage.setItem(JSON.stringify(e), "signup");
  };
  const validate = (e) => {
    const error = {};

    if (!e.username) {
      error.username = "required!";
    }
    if (e.username && e.username.length < 3) {
      error.username = "too short";
    }
    if (!e.password) {
      error.password = "required!";
    }
    if (e.password && e.password.length < 3) {
      error.password = "too short";
    }
    if (!e.confirm) {
      error.password = "required!";
    }
    if (e.password !== e.confirm) {
      error.confirm = "no match!";
    }
    return error;
  };
  return (
    <div>
      <Styles>
        <h2>Password / Confirm Validation</h2>

        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <Field name="username">
                {({ input, meta }) => (
                  <div>
                    <label>Username</label>
                    <input {...input} type="text" placeholder="Username" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <div>
                    <label>Password</label>
                    <input {...input} type="password" placeholder="Password" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="confirm">
                {({ input, meta }) => (
                  <div>
                    <label>Confirm</label>
                    <input {...input} type="password" placeholder="Confirm" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
            </form>
          )}
        />
      </Styles>
    </div>
  );
};

export default Signup;

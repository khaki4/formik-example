import React from "react";
import { render } from "react-dom";
import { withFormik } from "formik";
import Yup from "yup";

const App = ({ values, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={values.email}
      onChange={handleChange}
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={values.password}
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </form>
);

const FormikApp = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "test text",
      password: password || ""
    };
  },
  handleSubmit(value) {
    console.log(value);
  }
})(App);

render(<FormikApp />, document.getElementById("root"));

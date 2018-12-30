import React from "react";
import { render } from "react-dom";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";
import './index.css'

const App = ({ values, handleChange }) => (
  <Form>
    <Field type="email" name="email" placeholder="Email" />
    <Field type="password" name="password" placeholder="Password" />
    <label>Join our newsletter</label>
    <Field type="checkbox" name="newsletter" checked={values.newsletter} />
    <Field component="select" name="plan">
      <option value="free">free</option>
      <option value="premium">premium</option>
    </Field>
    <button type="submit">Submit</button>
  </Form>
);

const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || "test text",
      password: password || "",
      newsletter: newsletter || false,
      plan: plan || 'free'
    };
  },
  handleSubmit(value) {
    console.log(value);
  }
})(App);

render(<FormikApp />, document.getElementById("root"));

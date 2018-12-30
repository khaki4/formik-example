import React from "react";
import { render } from "react-dom";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.css";

const App = ({ values, errors, touched, isSubmitting }) => (
  <Form>
    <div>
      <ErrorMessage name="email" />
      <Field type="email" name="email" placeholder="Email" />
    </div>
    <div>
      <ErrorMessage name="password" />
      <Field type="password" name="password" placeholder="Password" />
    </div>
    <label>Join our newsletter</label>
    <Field type="checkbox" name="newsletter" checked={values.newsletter} />
    <Field component="select" name="plan">
      <option value="free">free</option>
      <option value="premium">premium</option>
    </Field>
    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>
  </Form>
);

const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || "test text",
      password: password || "",
      newsletter: newsletter || false,
      plan: plan || "free"
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(9, "Password must be 9 characters or longer")
      .required("Password is required")
  }),
  handleSubmit(value, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (value.email === "kevin@gmail.com") {
        setErrors({ email: "That email is already taken" });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  }
})(App);

render(<FormikApp />, document.getElementById("root"));

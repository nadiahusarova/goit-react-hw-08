import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import s from "./RegistrationPage.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values));
    options.resetForm();
  };
  return (
    <div className={s.regDiv}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.regForm}>
          <Field
            className={s.regField}
            name="name"
            placeholder="enter your name"
          ></Field>
          <Field
            className={s.regField}
            name="email"
            placeholder="enter your email"
          ></Field>
          <Field
            className={s.regField}
            name="password"
            type="password"
            placeholder="enter your password"
          ></Field>
          <button className={s.regButton} type="submit">
            Register
          </button>
          <p className={s.regParagraph}>
            You already have account?<NavLink to="/login">Sign in</NavLink>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
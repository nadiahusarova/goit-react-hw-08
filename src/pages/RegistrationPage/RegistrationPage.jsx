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
    <div className={s.wrap}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            className={s.field}
            name="name"
            placeholder="enter your name"
          />
          <Field
            className={s.field}
            name="email"
            placeholder="enter your email"
          />
          <Field
            className={s.field}
            name="password"
            type="password"
            placeholder="enter your password"
          />
          <button className={s.button} type="submit">
            Register
          </button>
          <div className={s.div}>
            <div className={s.textContainer}>
              <p className={s.txt}>You already have account?</p>
              <NavLink to="/login" className={s.link}>Sign in</NavLink>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;

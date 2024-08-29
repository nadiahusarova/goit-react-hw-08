import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import { selectLoggedIn } from "../../redux/auth/selectors";
import s from "./LoginPage.module.css";

const LoginForm = () => {
  const loggedIn = useSelector(selectLoggedIn);
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    options.resetForm();
  };
  if (loggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div className={s.loginDiv}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.loginForm}>
          <Field
            className={s.loginField}
            name="email"
            placeholder="enter email"
          ></Field>
          <Field
            className={s.loginField}
            name="password"
            type="password"
            placeholder="enter password"
          ></Field>
          <button className={s.loginButton} type="submit">
            Login
          </button>
          <p className={s.loginParagraph}>
            You don`t have account?<NavLink to="/register">Sing up</NavLink>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
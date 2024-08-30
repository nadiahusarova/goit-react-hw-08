import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import { selectLoggedIn } from "../../redux/auth/selectors";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const loggedIn = useSelector(selectLoggedIn);
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log("Submitting values:", values); // Додано для відладки
    dispatch(loginThunk(values))
      .then(() => {
        actions.resetForm();
      })
      .catch(error => {
        console.error("Login error:", error);
      });
  };
  if (loggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div className={s.wrap}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field className={s.field} name="email" type="email" placeholder="enter email" />
          <Field
            className={s.field}
            name="password"
            type="password"
            placeholder="enter password"
          />
          <button className={s.button} type="submit">
            Login
          </button>
          <div className={s.div}>
            <div className={s.textContainer}>
              <p className={s.txt}>You don’t have an account?</p>
              <NavLink to="/register" className={s.link}>Sign up</NavLink>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

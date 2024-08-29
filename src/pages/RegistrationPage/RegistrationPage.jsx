

import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import s from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(register(values));
  };

  return (
    <div>
      <h1>Registration</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <label className={s.label}  htmlFor="name">Name</label>
          <Field name="name" type="text" />
          
          <label className={s.label} htmlFor="email">Email</label>
          <Field name="email" type="email" />
          
          <label className={s.label} htmlFor="password">Password</label>
          <Field name="password" type="password" />
          
          <button className={s.button} type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;

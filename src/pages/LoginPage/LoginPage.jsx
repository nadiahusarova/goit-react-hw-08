
// import LoginForm from '../../components/AuthNav/AuthNav';
// import s from './LoginPage.module.css';

// const LoginPage = () => (
//   <div className={s.container}>
//     <h1>Login</h1>
//     <LoginForm />
//   </div>
// );

// export default LoginPage;
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import s from './LoginPage.module.css'

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(logIn(values));
  };

  return (
    <div >
      <h1 className={s.container}>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <label className={s.label} htmlFor="email">Email</label>
          <Field name="email" type="email" />
          
          <label className={s.label} htmlFor="password">Password</label>
          <Field name="password" type="password" />
          
          <button className={s.button} type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;

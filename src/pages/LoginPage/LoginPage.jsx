
import LoginForm from '../../components/AuthNav/AuthNav';
import s from './LoginPage.module.css';

const LoginPage = () => (
  <div className={s.container}>
    <h1>Login</h1>
    <LoginForm />
  </div>
);

export default LoginPage;

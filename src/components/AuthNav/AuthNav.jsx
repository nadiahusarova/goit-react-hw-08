
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => (
  <nav>
    <NavLink to="/register" className={s.link}>
      Registration
    </NavLink>
    <NavLink to="/login" className={s.link}>
      Вхід
    </NavLink>
  </nav>
);

export default AuthNav;

import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNavigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink className={s.navlink} to="/register">
        Registration
      </NavLink>
      <NavLink className={s.navlink} to="/login">
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNavigation;
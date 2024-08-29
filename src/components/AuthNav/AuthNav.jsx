import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNavigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${s.navLink} ${s.active}` : s.navLink
        }
        to="/register"
      >
        Registration
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${s.navLink} ${s.active}` : s.navLink
        }
        to="/login"
      >
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNavigation;

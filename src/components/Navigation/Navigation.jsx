import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { selectLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const Navigation = () => {
  const loggedIn = useSelector(selectLoggedIn);

  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${s.NavLink} ${s.active}` : s.NavLink
        }
        end
      >
        Home
      </NavLink>
      {loggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive ? `${s.NavLink} ${s.active}` : s.NavLink
          }
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;

import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { selectLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const Navigation = () => {
  const LoggedIn = useSelector(selectLoggedIn);
  return (
    <nav className={s.nav}>
      <NavLink className={s.NavLink} to="/">
        Home
      </NavLink>
      {LoggedIn && (
        <NavLink className={s.NavLink} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
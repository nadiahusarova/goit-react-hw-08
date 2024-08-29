import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => (
  <nav>
    <NavLink to="/" className={s.link}>
      Головна
    </NavLink>
    <NavLink to="/contacts" className={s.link}>
      Контакти
    </NavLink>
  </nav>
);

export default Navigation;

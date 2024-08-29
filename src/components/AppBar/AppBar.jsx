import s from "./AppBar.module.css";
import { selectLoggedIn, selectUser } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import AuthNavigation from "../AuthNav/AuthNav";

const AppBar = () => {
  const user = useSelector(selectUser);
  const loggedIn = useSelector(selectLoggedIn);
  return (
    <div className={s.divInfo}>
      <h2 className={s.email}>{user.email}</h2>
      <h3 className={s.name}>{user.name}</h3>
      <Navigation />
      {!loggedIn && <AuthNavigation />}
      {loggedIn && <UserMenu />}
    </div>
  );
};

export default AppBar;
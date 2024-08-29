import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authOps";
import { selectUser } from "../../redux/auth/authSelectors";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={s.container}>
      <p className={s.username}>Hello, {user.name}</p>
      <button
        type="button"
        onClick={() => dispatch(logout())}
        className={s.button}
      >
        Вихід
      </button>
    </div>
  );
};

export default UserMenu;

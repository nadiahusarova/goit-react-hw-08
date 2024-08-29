
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import s from './UserMenu.module.css'

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={s.container}>
      <p className={s.username}>Welcome, {user.name}</p>
      <button  className={s.button} onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default UserMenu;

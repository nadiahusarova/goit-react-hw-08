import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors'; // Переконайтесь, що цей селектор правильно експортується
import AuthNav from '../AuthNav/AuthNav'; // Переконайтесь, що AuthNav правильно імпортовано
import UserMenu from '../UserMenu/UserMenu'; // Переконайтесь, що UserMenu правильно імпортовано
import s from './AppBar.module.css'; // Переконайтесь, що стилі коректні

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;

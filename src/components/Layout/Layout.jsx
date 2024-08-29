import React from 'react'; // Переконайтесь, що React імпортовано
import { Link } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import s from './Layout.module.css'; // Перевірте правильність імпорту CSS модуля

const Layout = () => {
  return (
    <div className={s.container}>
      <AppBar />
      <main className={s.main}>

        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
      </main>
    </div>
  );
};

export default Layout;

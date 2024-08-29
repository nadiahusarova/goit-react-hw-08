import { Link } from 'react-router-dom';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <h1>404 - Page Not Found</h1>
      <Link className={s.link} to="/" >Go to Home Page</Link>
    </div>
  );
};

export default NotFoundPage;

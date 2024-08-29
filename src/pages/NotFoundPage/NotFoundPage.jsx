import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => (
  <div className={s.container}>
    <h1>404 - Сторінка не знайдена</h1>
    <p>На жаль, така сторінка не існує.</p>
    <Link to="/" className={s.link}>
      Повернутись на головну
    </Link>
  </div>
);

export default NotFoundPage;

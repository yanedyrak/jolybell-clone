import styles from "./Header.module.scss";
import logo from "../../../public/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <img src={logo} alt="" width={230} />
      </Link>

      <hr />
      <div className={styles.navbar}>
        <Link className={styles.link} to="/sweatshirts">
          ФУТБОЛКИ
        </Link>
        <Link className={styles.link} to="/sweatshirts">
          СВИТШОТЫ
        </Link>
        <Link className={styles.link} to="/hoodies">
          ХУДИ
        </Link>
        <Link className={styles.link} to="/sweatshirts">
          ШТАНЫ/ШОРТЫ
        </Link>
        <Link className={styles.link} to="/sweatshirts">
          ПОЛО
        </Link>
        <Link className={styles.link} to="/sweatshirts">
          РУБАШКИ
        </Link>
        <Link className={styles.link} to="/sweatshirts">
          ПИЖАМА
        </Link>
        <Link className={styles.link} to="/sweatshirts">
          СУВЕНИРЫ
        </Link>
        <Link className={styles.link} to="/faq">
          FAQ
        </Link>
      </div>
    </div>
  );
};

export default Header;

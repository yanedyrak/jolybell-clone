import styles from "./Header.module.scss";
import logo from "/logo.png";
import cart from "./cart/cart.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="" width={230} />
      </Link>

      <hr />
      <div className={styles.navbar}>
        <div className={styles.links}>
          <Link className={styles.link} to="/t-shirts">
            ФУТБОЛКИ
          </Link>
          <Link className={styles.link} to="/sweatshirts">
            СВИТШОТЫ
          </Link>
          <Link className={styles.link} to="/hoodies">
            ХУДИ
          </Link>
          <Link className={styles.link} to="/pants">
            ШТАНЫ/ШОРТЫ
          </Link>
          <Link className={styles.link} to="/polo">
            ПОЛО
          </Link>
          <Link className={styles.link} to="/shirts">
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
        <div className={styles.cart}>
          <img src={cart} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;

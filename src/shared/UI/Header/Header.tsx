import styles from "./Header.module.scss";
import cartImg from "../../assets/cart/cart.svg";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
const Header = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <img className={styles.logo} src={logo} width={250} alt="1" />
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
          <img src={cartImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;

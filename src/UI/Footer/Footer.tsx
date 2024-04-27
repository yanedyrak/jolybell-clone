import styles from "./Footer.module.scss";
import vk from "./media/vk.png";
import git from "./media/git.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.menu}>
        <Link className={styles.link} to="/sweatshirts">
          Футболки
        </Link>
        <Link className={styles.link} to="/sweatshirts">
          Свитшоты
        </Link>
        <Link className={styles.link} to="/sweatshirts">
          Худи
        </Link>
        <Link className={styles.link} to="/sweatshirts">
          Штаны/Шорты
        </Link>
        <Link className={styles.link} to="/sweatshirts">
          Поло
        </Link>
        <Link className={styles.link} to="/sweatshirts">
          Рубашки
        </Link>
        <Link className={styles.link} to="/sweatshirts">
          Пижама
        </Link>
        <Link className={styles.link} to="/sweatshirts">
          Сувениры
        </Link>
        <Link className={styles.link} to="/sweatshirts">
          FAQ
        </Link>
      </div>
      <div className={styles.media}>
        <a target="_blank" href="https://github.com/yanedyrak">
          <img src={git} alt="" />
        </a>
        <a target="_blank" href="https://vk.com/itoshiJohan">
          <img src={vk} alt="" />
        </a>
      </div>

      <div className={styles.contacts}>
        <p className={styles.email}>E-MAIL:</p>
        <p className={styles.emailValue}>kkzemeow@gmail.com</p>
        <p className={styles.email}>TELEGRAM:</p>
        <p className={styles.emailValue}>@itoshiJohan</p>
      </div>
    </div>
  );
};

export default Footer;

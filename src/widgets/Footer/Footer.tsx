import styles from "./Footer.module.scss";

import github from "../../shared/assets/social/github.svg";
import { useDispatch } from "react-redux";
import { setCategory } from "../../shared/store/slices/categorySlice";
const categoryArr: string[] = [
  "ФУТБОЛКИ",
  "СВИТШОТЫ",
  "ХУДИ",
  "ШТАНЫ/ШОРТЫ",
  "ПОЛО",
  "РУБАШКИ",
  "ПИЖАМА",
  "СУВЕНИРЫ",
];
const Footer = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.footer}>
      <div className={styles.menu}>
        {categoryArr.map((element, index) => (
          <a
            key={index}
            className={styles.link}
            onClick={() => {
              window.scrollTo(0, 0);
              dispatch(setCategory(index));
            }}
          >
            {element}
          </a>
        ))}
      </div>
      <div className={styles.media}>
        <a target="_blank" href="https://github.com/yanedyrak">
          <img className={styles.icon} src={github} alt="" />
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

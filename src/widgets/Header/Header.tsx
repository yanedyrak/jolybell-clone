import styles from "./Header.module.scss";
import cartImg from "../../shared/assets/cart/cart.svg";
import { Link } from "react-router-dom";
import logo from "../../shared/assets/logo/logo.png";
import { useDispatch } from "react-redux";
import { setCategory } from "../../shared/store/slices/categorySlice";
const Header = () => {
  const dispatch = useDispatch();
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

  return (
    <div className={styles.container}>
      <Link to="/">
        <img className={styles.logo} src={logo} width={250} alt="1" />
      </Link>

      <hr />
      <div className={styles.navbar}>
        <div className={styles.links}>
          {categoryArr.map((element, index) => (
            <a
              key={index}
              className={styles.link}
              onClick={() => dispatch(setCategory(index))}
            >
              {element}
            </a>
          ))}
        </div>
        <button className={styles.cart}>
          <img src={cartImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;

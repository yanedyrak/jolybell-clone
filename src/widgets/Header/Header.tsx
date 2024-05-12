import styles from "./Header.module.scss";
import cartImg from "../../shared/assets/cart/cart.svg";
import { Link } from "react-router-dom";
import logo from "../../shared/assets/logo/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../shared/store/slices/categorySlice";
import { RootState } from "../../shared/store/store";
import { useEffect, useRef, useState } from "react";
import CartItem from "../../entities/CartItem/CartItem";
import burgerImg from "../../shared/assets/cart/burger.svg";
const Header = () => {
  const cartDiv = useRef<HTMLDivElement>(null);
  const cartButton = useRef<HTMLButtonElement>(null);
  const [isTrue, setIsTrue] = useState<boolean>(false);
  const cartValue = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cartDiv.current &&
        cartButton.current &&
        !event.composedPath().includes(cartDiv.current) &&
        !event.composedPath().includes(cartButton.current)
      ) {
        setIsTrue(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);
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
      <div ref={cartDiv} className={`modalContainer ${isTrue ? "active" : ""}`}>
        <div onClick={() => setIsTrue(false)} className={styles.cartHeader}>
          Продолжить покупки
        </div>
        {cartValue.items.length > 0 && (
          <div className={styles.cartContainer}>
            <div className={styles.cartValue}>
              <h1>Мои покупки</h1>

              {cartValue.items.map((item) => (
                <div>
                  <CartItem {...item} key={item.id} />
                </div>
              ))}
            </div>
            <div className={styles.cartPrice}>
              <p>ИТОГО:</p> <h1>{cartValue.totalPrice} USD</h1>
            </div>
            <button className={styles.cartButton}>ОФОРМИТЬ ЗАКАЗ</button>
          </div>
        )}
      </div>

      <Link className={styles.logoDiv} to="/">
        <img className={styles.logo} src={logo} alt="1" />
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
        <div className={styles.buttonFlex}>
          <div className={styles.cart}>
            <button
              onClick={() => setIsTrue(true)}
              ref={cartButton}
              className={styles.cartImg}
            >
              <img src={cartImg} alt="" />
            </button>
            <div className={styles.counter}>
              {cartValue.items.reduce((a, b) => a + b.count, 0)}
            </div>
          </div>
          <div className={styles.cart}>
            <button
              onClick={() => setIsTrue(true)}
              ref={cartButton}
              className={styles.burger}
            >
              <img src={burgerImg} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

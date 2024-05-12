import { useDispatch, useSelector } from "react-redux";
import styles from "./CartItem.module.scss";
import { RootState } from "../../shared/store/store";
import {
  addItem,
  deleteItem,
  removeItem,
} from "../../shared/store/slices/cartSlice";
import { ItemProps } from "../../entities/Item/Item";

const CartItem: React.FC<ItemProps> = ({ url, id, price, title }) => {
  const cartItem = useSelector((state: RootState) =>
    state.cartSlice.items.find((el) => el.id === id)
  );
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <button
        className={styles.delete}
        onClick={() => dispatch(deleteItem(id))}
      >
        x
      </button>
      <img className={styles.img} src={url} alt="" />
      <div className={styles.information}>
        <h3 className={styles.title}>{cartItem?.title}</h3>
        <p className={styles.amount}>
          {cartItem && `${cartItem?.price * cartItem?.count} USD`}
        </p>
        <div className={styles.cart}>
          <span className={styles.value}>{cartItem?.count}</span>

          <div className={styles.buttons}>
            <button
              onClick={() => dispatch(addItem({ id, price, url, title }))}
              className={styles.button}
            >
              +
            </button>
            <button
              onClick={() => dispatch(removeItem(id))}
              className={styles.button}
            >
              -
            </button>
          </div>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default CartItem;

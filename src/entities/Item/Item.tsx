import { useDispatch } from "react-redux";
import { addItem } from "../../shared/store/slices/cartSlice";
import styles from "./Item.module.scss";

export interface ItemProps {
  id: number;
  price: number;
  url: string;
  title: string;
}

const Item: React.FC<ItemProps> = ({ id, price, url, title }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.price}>{price} USD</div>
        <img className={styles.img} src={url} alt="img" />
      </div>
      <button
        onClick={() => dispatch(addItem({ id, price, url, title }))}
        className={styles.button}
      >
        {title}
      </button>
    </div>
  );
};

export default Item;

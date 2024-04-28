import styles from "./Item.module.scss";

interface ItemProps {
  price: number;
  url: string;
  title: string;
}

const Item: React.FC<ItemProps> = ({ price, url, title }) => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.price}>{price} USD</div>
          <img className={styles.img} src={url} alt="img" />
        </div>
        <button className={styles.button}>{title}</button>
      </div>
    </div>
  );
};

export default Item;

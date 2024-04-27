import styles from "./Item.module.scss";

interface ItemProps {
  price: number;
  title: string;
}

const Item: React.FC<ItemProps> = ({ price, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.price}>{price} USD</div>
        <img
          className={styles.img}
          src="https://cdn.jolybell.com/images/xvrILhJWs8s6fXN.png?width=549&height=540&quality=90"
          alt=""
        />
      </div>

      <button className={styles.button}>{title}</button>
    </div>
  );
};

export default Item;

import { useEffect, useState } from "react";
import styles from "./Sweatshirts.module.scss";
import axios from "axios";
import Item from "../../UI/Item/Item";

interface Data {
  id: number;
  url: string;
  title: string;
  price: number;
}
const Sweatshirts = () => {
  const [state, setState] = useState<any>([]);
  useEffect(() => {
    axios
      .get(
        "https://662d4edfa7dda1fa378a5594.mockapi.io/jolly/items?type=sweatshirt"
      )
      .then((dat) => setState(dat.data));
  }, []);
  {
    console.log(state);
  }
  return (
    <div className={styles.container}>
      <h1>Свитшоты</h1>
      <div className={styles.items}>
        {state.map((el: Data) => (
          <Item title={el.title} key={el.id} price={el.price} url={el.url} />
        ))}
      </div>
    </div>
  );
};
export default Sweatshirts;

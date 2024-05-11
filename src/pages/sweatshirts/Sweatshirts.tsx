import { useEffect, useState } from "react";
import styles from "./Sweatshirts.module.scss";
import axios from "axios";
import Item from "../../entities/Item/Item";
import Skeleton from "../../shared/UI/Skeleton/Skeleton";

interface Data {
  id: number;
  url: string;
  title: string;
  price: number;
}
const Sweatshirts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [state, setState] = useState<Data[]>([]);
  useEffect(() => {
    axios
      .get(
        "https://662d4edfa7dda1fa378a5594.mockapi.io/jolly/items?type=sweatshirt"
      )
      .then((dat) => {
        setState(dat.data);
        setIsLoading(false);
      });
  }, []);
  {
    console.log(state);
  }
  return (
    <div className={styles.container}>
      <h1>Свитшоты</h1>
      <div className={styles.items}>
        {isLoading
          ? new Array(6).fill(0).map((_, index) => <Skeleton key={index} />)
          : state.map((el: Data) => <Item key={el.id} {...el} />)}
      </div>
    </div>
  );
};
export default Sweatshirts;

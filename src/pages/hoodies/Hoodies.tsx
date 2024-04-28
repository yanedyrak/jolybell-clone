import { useEffect, useState } from "react";
import styles from "../sweatshirts/Sweatshirts.module.scss";
import axios from "axios";
import Item from "../../UI/Item/Item";
import Skeleton from "../../UI/Skeleton/Skeleton";

interface Data {
  id: number;
  url: string;
  title: string;
  price: number;
}
const Hoodies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [state, setState] = useState<Data[]>([]);
  useEffect(() => {
    axios
      .get(
        "https://662d4edfa7dda1fa378a5594.mockapi.io/jolly/items?type=hoodie"
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
      <h1>Худи</h1>
      <div className={styles.items}>
        {isLoading
          ? new Array(6).fill(0).map((_, index) => <Skeleton key={index} />)
          : state.map((el: Data) => <Item key={el.id} {...el} />)}
      </div>
    </div>
  );
};
export default Hoodies;

import { useEffect, useState } from "react";
import styles from "./ItemsPage.module.scss";
import axios from "axios";
import Item from "../../entities/Item/Item";
import Skeleton from "../../shared/UI/Skeleton/Skeleton";
import { useSelector } from "react-redux";
import { RootState } from "../../shared/store/store";
interface Data {
  id: number;
  url: string;
  title: string;
  price: number;
}
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

const linkArr: string[] = [
  "t-shirt",
  "sweatshirt",
  "hoodie",
  "pants",
  "polo",
  "shirt",
  "pijama",
  "souveniers",
];
const ItemsPage: React.FC = () => {
  const category = useSelector(
    (state: RootState) => state.categorySlice.category
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [state, setState] = useState<Data[]>([]);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://662d4edfa7dda1fa378a5594.mockapi.io/jolly/items?type=${linkArr[category]}`
      )
      .then((dat) => {
        setState(dat.data);
        setIsLoading(false);
      });
  }, [category]);

  return (
    <div className={styles.container}>
      <h1 className={styles.itemsTitle}>{categoryArr[category]}</h1>
      <div className={styles.items}>
        {isLoading
          ? new Array(6).fill(0).map((_, index) => <Skeleton key={index} />)
          : state.map((el: Data) => <Item key={el.id} {...el} />)}
      </div>
    </div>
  );
};
export default ItemsPage;

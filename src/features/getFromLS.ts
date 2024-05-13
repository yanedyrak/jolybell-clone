import { CartItem } from "../shared/store/slices/cartSlice";
import { calcTotalPrice } from "./calcTotalPrice";

export const getFromLS = () => {
  const cart = localStorage.getItem("cart");
  const items = cart ? JSON.parse(cart) : [];
  const totalPrice = calcTotalPrice(items);
  return {
    items: items as CartItem[],
    totalPrice: totalPrice,
  };
};

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Item from "../../../entities/Item/Item";

type Item = {
  id: number;
  price: number;
  url: string;
  title: string;
};
type CartItem = Item & {
  count: 1;
};
interface IInitialState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: IInitialState = {
  items: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Item>) {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (findItem) {
        findItem.count += 1;
        state.totalPrice += findItem.price;
      } else {
        state.items.push({ ...action.payload, count: 1 });
        state.totalPrice += action.payload.price;
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem && findItem.count > 1) {
        findItem.count -= 1;
        state.totalPrice -= findItem.price;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.totalPrice -= findItem!.price;
      }
    },
    deleteItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find((item) => item.id === action.payload);
      state.totalPrice -= findItem!.price * findItem!.count;
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.totalPrice = 0;
      state.items = [];
    },
  },
});

export const { addItem, deleteItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

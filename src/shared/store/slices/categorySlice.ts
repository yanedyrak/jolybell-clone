import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 0,
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<number>) {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;

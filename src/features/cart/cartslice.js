import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  name: "cart",
  cartItems: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.cartItems.push(payload);
      toast.success("Item added");
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
      toast.success("Item removed");
    },
    calculateTotal: (state) => {
      const result = state.cartItems.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      state.total = result;
    },
  },
});

export const { addItem, removeItem, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;

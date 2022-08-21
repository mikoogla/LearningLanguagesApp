import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const { replaceCart, addProduct, removeProduct, toggleCart } =
  cartSlice.actions;
export default store;

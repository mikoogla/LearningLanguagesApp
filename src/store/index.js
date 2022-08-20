import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";
import syncSlice from "./syncSlice";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    sync: syncSlice.reducer,
  },
});

export const { replaceCart, addProduct, removeProduct, toggleCart } =
  cartSlice.actions;
export const { startLoading, stopLoading } = syncSlice.actions;
export default store;

import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./noteSlice";

const store = configureStore({
  reducer: {
    note: noteSlice.reducer,
  },
});

export const { replaceCart, addProduct, removeProduct, toggleCart } =
  noteSlice.actions;
export default store;

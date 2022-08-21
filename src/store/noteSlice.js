import { createSlice } from "@reduxjs/toolkit";

const initial_note = {
  products: [],
  hide: false,
  touched: false,
  size: 0,
  total: 0,
};

const noteSlice = createSlice({
  name: "note",
  initialState: initial_note,
  reducers: {
    replaceCart: (state, action) => {
      state.products = action.payload.products;
      state.size = action.payload.size;
      state.total = action.payload.total;
      state.hide = action.payload.hide;
    },
    addProduct: (state, action) => {
      console.log("product: ");
    },
    removeProduct: (state, action) => {
      console.log("product: ");
    },
    toggleCart: (state) => {
      state.hide = !state.hide;
    },
  },
});

export default noteSlice;

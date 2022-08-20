import { createSlice } from "@reduxjs/toolkit";
import { startLoading, stopLoading } from "./index.js";

const initial_cart = {
  products: [],
  hide: false,
  touched: false,
  size: 0,
  total: 0,
};

const incrementProduct = (state, product) => {
  state.size += 1;
  state.total += Math.round(product.price * 100) / 100;
  state.touched = true;
};
const decrementProduct = (state, product) => {
  state.size -= 1;
  state.total -= Math.round(product.price * 100) / 100;
  state.touched = true;
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initial_cart,
  reducers: {
    replaceCart: (state, action) => {
      state.products = action.payload.products;
      state.size = action.payload.size;
      state.total = action.payload.total;
      state.hide = action.payload.hide;
    },
    addProduct: (state, action) => {
      const product = action.payload.product;
      console.log("product: " + product.name + " " + state.products);
      const productIndex = state.products.findIndex((p) => p.id === product.id);
      if (productIndex !== -1) {
        incrementProduct(state, product);
        state.products[productIndex].quantity += 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
        incrementProduct(state, product);
      }
    },
    removeProduct: (state, action) => {
      const product = action.payload.product;
      const productIndex = state.products.findIndex((p) => p.id === product.id);
      if (productIndex !== -1) {
        state.products[productIndex].quantity -= 1;
        decrementProduct(state, product);
        if (state.products[productIndex].quantity === 0) {
          state.products.splice(productIndex, 1);
        }
      }
    },
    toggleCart: (state) => {
      state.hide = !state.hide;
    },
  },
});

export const sendCartData = (cartData) => {
  return (dispatch) => {
    dispatch(startLoading());
    return fetch(
      "https://mini-shop-764d4-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cartData),
      }
    )
      .then((response) => {
        dispatch(stopLoading());
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
      })
      .catch((err) => {
        console.log("sync error: " + err);
      })
      .finally(() => {
        dispatch(stopLoading());
      });
  };
};
export default cartSlice;

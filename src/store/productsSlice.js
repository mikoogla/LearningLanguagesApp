import { createSlice } from "@reduxjs/toolkit";

const initial_products = {
  products: [
    // {
    //   id: 1,
    //   name: "Yerba Kurupi",
    //   price: 10.78,
    //   description: "Yerba Mate Kurupi Classic 0,5kg",
    // },
    // {
    //   id: 2,
    //   name: "Yerba Mate Pajarito",
    //   price: 21.67,
    //   description: "Yerba Mate Pajarito Elaborada Con Palo Traditional 1kg",
    // },
    // {
    //   id: 3,
    //   name: "Yerba Mate Kurupi Limon",
    //   price: 12.0,
    //   description: "Yerba Mate Kurupi Menta Limon 0,5kg",
    // },
    // {
    //   id: 4,
    //   name: "Random Sample",
    //   price: 2.0,
    //   description: "Try it",
    // },
    // {
    //   id: 5,
    //   name: "Taragui ENERGIA",
    //   price: 15.96,
    //   description: "Yerba Mate Taragui ENERGIA 0,5kg",
    // },
    // {
    //   id: 6,
    //   name: "Matero + Bombilla",
    //   price: 50.0,
    //   description: "Good quality",
    // },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState: initial_products,
  reducers: {},
});

export default productsSlice;

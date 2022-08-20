import React from "react";
import Cart from "./items/Cart";
import styles from "./Content.module.css";
import Products from "./items/Products";
export default function Content() {
  return (
    <div className={styles.main}>
      <Cart />
      <Products />
    </div>
  );
}

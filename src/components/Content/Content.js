import React from "react";
import Cart from "./items/TextContent";
import styles from "./Content.module.css";
import Products from "./items/SavedNotes";
export default function Content() {
  return (
    <div className={styles.main}>
      <Cart />
      <Products />
    </div>
  );
}

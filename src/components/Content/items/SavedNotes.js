import React from "react";
import Button from "../../UI/Button/Button";
// import { useSelector } from "react-redux";
// import Product from "../../Product/Product";
import Card from "../../UI/Card/Card";
import styles from "./Styles.module.css";

export default function SavedNotes() {
  // const products = useSelector((state) => state.products.products);
  return (
    <Card className={styles.content}>
      <h2>Saved notes will be here</h2>
      <Button className={styles.button}>Add Text</Button>
      {/* {products.map((product) => (
        <Product key={product.id} product={product} type="ProductList" />
      ))} */}
    </Card>
  );
}

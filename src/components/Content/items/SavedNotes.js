import React from "react";
// import { useSelector } from "react-redux";
// import Product from "../../Product/Product";
import Card from "../../UI/Card/Card";
import styles from "./Styles.module.css";

export default function Products() {
  // const products = useSelector((state) => state.products.products);
  return (
    <Card className={styles.content}>
      <h2>Saved notes will be here</h2>
      {/* {products.map((product) => (
        <Product key={product.id} product={product} type="ProductList" />
      ))} */}
    </Card>
  );
}

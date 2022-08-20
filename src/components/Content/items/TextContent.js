import React from "react";
import { useSelector } from "react-redux";
import Product from "../../Product/Product";
import Card from "../../UI/Card/Card";
import styles from "./Styles.module.css";

export default function TextContent() {
  const cart = useSelector((state) => state.cart.products);
  const cartSize = useSelector((state) => state.cart.size);
  const isHidden = useSelector((state) => state.cart.hide);
  const loading = useSelector((state) => state.sync.loading);

  return (
    <>
      {!isHidden && (
        <Card className={styles.content}>
          {cartSize > 0 ? (
            loading ? (
              <h1>Loading</h1>
            ) : (
              cart.map((product) => (
                <Product key={product.id} product={product}></Product>
              ))
            )
          ) : (
            <div>
              <h2>You will see your text here</h2>
            </div>
          )}
        </Card>
      )}
    </>
  );
}

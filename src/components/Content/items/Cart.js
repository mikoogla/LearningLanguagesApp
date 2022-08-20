import React from "react";
import { useSelector } from "react-redux";
import Product from "../../Product/Product";
import Card from "../../UI/Card/Card";
import styles from "./Cart.module.css";

export default function Cart() {
  const cart = useSelector((state) => state.cart.products);
  const cartSize = useSelector((state) => state.cart.size);
  const isHidden = useSelector((state) => state.cart.hide);
  const loading = useSelector((state) => state.sync.loading);

  return (
    <>
      {!isHidden && (
        <Card className={styles.cart}>
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
              <h2>Your text will be here</h2>
            </div>
          )}
        </Card>
      )}
    </>
  );
}

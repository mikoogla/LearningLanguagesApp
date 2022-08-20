import React from "react";
import Button from "../UI/Button/Button";
import styles from "./Navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../store/index.js";
import Card from "../UI/Card/Card";

export default function Navbar() {
  const dispatch = useDispatch();
  const cartSize = useSelector((state) => state.cart.size);
  const totalPrice = useSelector((state) => state.cart.total);

  return (
    <div className={styles.main}>
      <h3 className={styles.name}>Learning Languages App</h3>
      <div className={styles.info}>
        <Card className={styles.sum}>
          Total: {Math.abs(totalPrice).toFixed(2)} PLN
        </Card>
        <Button
          onClick={() => {
            dispatch(toggleCart());
          }}
          className={styles.button}
        >
          Cart {cartSize}
        </Button>
      </div>
    </div>
  );
}

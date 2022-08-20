import React from "react";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../store/index.js";
import styles from "./Product.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

export default function Product(props) {
  const dispatch = useDispatch();
  const addProductHandler = () => {
    dispatch(addProduct({ product: props.product }));
  };
  const removeProductHandler = () => {
    dispatch(removeProduct({ product: props.product }));
  };
  return (
    <Card className={styles.main} {...props}>
      <div className={styles.content}>
        Name: {props.product.name} <br />
        Price: {`${props.product.price.toFixed(2)} PLN`} <br />
        {props.type === "ProductList" &&
          `Description: ${props.product.description}`}
        {props.type !== "ProductList" && `Quantity: ${props.product.quantity}`}
      </div>
      <div className={styles.buttonsContainer}>
        <Button className={styles.button} onClick={addProductHandler}>
          Add
        </Button>
        <Button className={styles.button} onClick={removeProductHandler}>
          Remove
        </Button>
      </div>
    </Card>
  );
}

import React from "react";
import Button from "../UI/Button/Button";
import styles from "./Navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleNote } from "../../store/index.js";
import Card from "../UI/Card/Card";

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <div className={styles.main}>
      <h3 className={styles.name}>Learning Languages App</h3>
      <div className={styles.info}>
        <Card className={styles.sum}>You know {535} words</Card>
        <Button
          onClick={() => {
            dispatch(toggleNote());
          }}
          className={styles.button}
        >
          Notes
        </Button>
        <Button className={styles.button}>Dictionary</Button>
      </div>
    </div>
  );
}

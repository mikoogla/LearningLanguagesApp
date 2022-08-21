import React from "react";
import { useSelector } from "react-redux";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import styles from "./Styles.module.css";

export default function SavedNotes() {
  const isHidden = useSelector((state) => state.cart.hide);

  return (
    !isHidden && (
      <Card className={styles.content}>
        <h2>Saved notes will be here</h2>
        <Button className={styles.button}>New Note</Button>
      </Card>
    )
  );
}

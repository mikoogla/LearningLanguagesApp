import React from "react";
import { useSelector } from "react-redux";
import Card from "../../UI/Card/Card";
import styles from "./Styles.module.css";
import text from "./SampleText.js";
console.log(text);
export default function TextContent() {
  const isHidden = useSelector((state) => state.cart.hide);

  return (
    <>
      {!isHidden && (
        <Card className={styles.content}>
          <h2>You will see your text here</h2>
          <Card className={styles.textcontainer}>{text}</Card>
        </Card>
      )}
    </>
  );
}

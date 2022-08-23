import React from "react";
import Button from "../UI/Button/Button";
import styles from "./Navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { switchState } from "../../store/index.js";
import Card from "../UI/Card/Card";

export default function Navbar() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.logic.state);
  const knownWords = useSelector((state) => state.dictionary.known);

  const buttonText = () => {
    if (state === "notes") {
      return "Dictionary";
    } else if (state === "dictionary") {
      return "Hide";
    } else {
      return "Notes";
    }
  };
  return (
    <div className={styles.main}>
      <h3 className={styles.name}>Learning Languages App</h3>
      <div className={styles.info}>
        <Card className={styles.sum}>You know {knownWords} words</Card>
        <Button
          onClick={() => {
            dispatch(switchState());
          }}
          className={styles.button}
        >
          {buttonText()}
        </Button>
      </div>
    </div>
  );
}

import React from "react";
import Button from "../UI/Button/Button";
import styles from "./Navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { switchState } from "../../store/index.js";
import { Link } from "react-router-dom";
import Card from "../UI/Card/Card";

export default function Navbar() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.logic.state);
  const dictionaryLength = useSelector(
    (state) => state.dictionary.dictionary.length
  );

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
        <Card className={styles.sum}>You know {dictionaryLength} words</Card>
        <Link to={`/${buttonText().toLowerCase()}`}>
          <Button
            onClick={() => {
              dispatch(switchState());
            }}
            className={styles.button}
          >
            {buttonText()}
          </Button>
        </Link>
      </div>
    </div>
  );
}

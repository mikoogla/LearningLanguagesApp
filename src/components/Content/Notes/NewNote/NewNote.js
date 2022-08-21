import React from "react";
import Button from "../../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { hideNewNote } from "../../../../store";
import TextArea from "../../../UI/TextArea/TextArea";
import styles from "./NewNote.module.css";
export default function NewNote() {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideNewNote());
    console.log("close");
  };
  return (
    <div className={styles.main}>
      <h2>Paste your note here</h2>
      <TextArea className={styles.text} />
      <div className={styles.buttonContainer}>
        <Button onClick={() => handleClose()} className={styles.button}>
          Save
        </Button>
        <Button onClick={() => handleClose()} className={styles.button}>
          Close
        </Button>
      </div>
    </div>
  );
}

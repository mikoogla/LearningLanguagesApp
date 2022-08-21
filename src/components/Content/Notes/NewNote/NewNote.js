import React from "react";
import Button from "../../../UI/Button/Button";
import TextArea from "../../../UI/TextArea/TextArea";
import styles from "./NewNote.module.css";
export default function NewNote() {
  return (
    <form>
      <div className={styles.main}>
        <h2>Paste your note here</h2>
        <TextArea className={styles.text} />
        <Button className={styles.button}>Save</Button>
      </div>
    </form>
  );
}

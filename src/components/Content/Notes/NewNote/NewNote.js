import React, { useState } from "react";
import Button from "../../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { hideNewNote } from "../../../../store";
import TextArea from "../../../UI/TextArea/TextArea";
import styles from "./NewNote.module.css";
import Input from "../../../UI/TextArea/TextArea";
export default function NewNote() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const [title, setTitle] = React.useState("");
  const handleClose = (event) => {
    event.preventDefault();
    dispatch(hideNewNote());
    console.log("close");
  };
  const handleSave = (event) => {
    event.preventDefault();
    dispatch(hideNewNote());
    console.log("saving " + value + " " + title);
  };
  return (
    <form onSubmit={handleSave}>
      <div className={styles.main}>
        <h2>Paste your note here</h2>
        <Input
          type="text"
          spellcheck="false"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className={styles.input}
        />
        <TextArea
          type="textarea"
          spellcheck="false"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className={styles.text}
        />
        <div className={styles.buttonContainer}>
          <Button type="submit" className={styles.button}>
            Save
          </Button>
          <Button onClick={() => handleClose()} className={styles.button}>
            Close
          </Button>
        </div>
      </div>
    </form>
  );
}

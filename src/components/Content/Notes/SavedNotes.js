import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import NewNote from "./NewNote/NewNote";
import { hideNewNote } from "../../../store";
import styles from "./Styles.module.css";

export default function SavedNotes() {
  const dispatch = useDispatch();
  const isHidden = useSelector((state) => state.notes.hide);
  const isNewNoteHidden = useSelector((state) => state.notes.hideNewNote);

  return (
    !isHidden && (
      <Card className={styles.content}>
        <h2>Saved notes will be here</h2>
        <Button
          className={styles.button}
          onClick={() => {
            dispatch(hideNewNote());
          }}
        >
          New Note
        </Button>
        {!isNewNoteHidden && <NewNote />}
      </Card>
    )
  );
}

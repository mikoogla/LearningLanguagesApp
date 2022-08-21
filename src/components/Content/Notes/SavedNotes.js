import React from "react";
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
  const notes = useSelector((state) => state.notes.notes);
  return (
    !isHidden && (
      <Card className={styles.content}>
        <h2>Saved notes:</h2>
        <div className={styles.notesContainer}>
          {notes.map((note) => (
            <Card className={styles.noteItem}>
              <Button className={styles.button}>{"Show"}</Button>
              <div className={styles.tt}>
                <div>{"Title: " + note.title}</div>
                <div>{"Text: " + note.text}</div>
              </div>
            </Card>
          ))}
        </div>
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

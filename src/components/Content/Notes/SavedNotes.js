import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideNewNote } from "../../../store";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import NewNote from "./NewNote/NewNote";
import NoteList from "./NoteList/NoteList";

import styles from "./SavedNotes.module.css";

export default function SavedNotes() {
  const dispatch = useDispatch();
  const isNewNoteHidden = useSelector((state) => state.logic.hideNewNote);
  const notes = useSelector((state) => state.notes.notes);
  return (
    <Card className={styles.content}>
      <div className={styles.top}>
        <h2>Saved notes:</h2>
        <Button
          className={styles.button}
          onClick={() => {
            dispatch(hideNewNote());
          }}
        >
          New Note
        </Button>
      </div>
      {notes.length === 0 && <p>You have no saved notes.</p>}

      <div className={styles.notesContainer}>
        <NoteList notes={notes} />
      </div>
      {!isNewNoteHidden && <NewNote />}
    </Card>
  );
}

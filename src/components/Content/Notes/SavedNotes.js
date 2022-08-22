import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideNewNote } from "../../../store";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import NewNote from "./NewNote/NewNote";
import NoteList from "./NoteList/NoteList";

import styles from "./Styles.module.css";

export default function SavedNotes() {
  const dispatch = useDispatch();
  const isHidden = useSelector((state) => state.logic.hide);
  const isNewNoteHidden = useSelector((state) => state.logic.hideNewNote);
  const notes = useSelector((state) => state.notes.notes);
  return (
    !isHidden && (
      <Card className={styles.content}>
        <h2>Saved notes:</h2>
        <div className={styles.notesContainer}>
          <NoteList notes={notes} />
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

import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import NewNote from "./NewNote/NewNote";
import styles from "./Styles.module.css";

export default function SavedNotes() {
  const isHidden = useSelector((state) => state.note.hide);
  const [ShowNewNote, setShowNewNote] = useState(false);
  const NewNoteHandler = () => {
    setShowNewNote(!ShowNewNote);
  };
  return (
    !isHidden && (
      <Card className={styles.content}>
        <h2>Saved notes will be here</h2>
        <Button className={styles.button} onClick={() => NewNoteHandler()}>
          New Note
        </Button>
        {ShowNewNote && <NewNote />}
      </Card>
    )
  );
}

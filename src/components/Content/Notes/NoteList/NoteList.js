import React from "react";
import { useDispatch } from "react-redux";
import Card from "../../../UI/Card/Card";
import Button from "../../../UI/Button/Button";
import styles from "./NoteList.module.css";
import { showNote } from "../../../../store";
export default function NoteList(props) {
  const dispatch = useDispatch();

  return (
    <>
      {props.notes.map((note) => (
        <Card className={styles.noteItem}>
          <Button
            onClick={() => {
              dispatch(showNote(note));
            }}
            className={styles.button}
          >
            {"Show"}
          </Button>
          <div className={styles.tt}>
            <h3>{"Title: " + note.title}</h3>
          </div>
        </Card>
      ))}
    </>
  );
}

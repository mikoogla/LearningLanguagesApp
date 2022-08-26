import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { replaceNotes } from "../store";

export default function NotesSync() {
  const dispatch = useDispatch();
  const LocalNotes = localStorage.getItem("notes") || "[]";
  const LocalNotesParsed = JSON.parse(LocalNotes);
  const notes = useSelector((state) => state.notes.notes);
  console.log("LocalNotes: ", LocalNotesParsed);

  useEffect(() => {
    if (LocalNotesParsed.length !== 0) {
      dispatch(replaceNotes(LocalNotesParsed));
    }
  }, []);

  useEffect(() => {
    console.log("saving notes to localStorage: ", notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return null;
}

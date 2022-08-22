import React from "react";
import { useSelector } from "react-redux";
import TextContent from "./Text/TextContent";
import styles from "./Content.module.css";
import SavedNotes from "./Notes/SavedNotes";
import Dictionary from "./Dictionary/Dictionary";
export default function Content() {
  const state = useSelector((state) => state.logic.state);
  console.log("state", state);
  return (
    <div className={styles.main}>
      <TextContent />
      {state === "notes" && <SavedNotes />}
      {state === "dictionary" && <Dictionary />}
    </div>
  );
}

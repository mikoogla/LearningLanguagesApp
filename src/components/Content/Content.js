import React from "react";
import TextContent from "./items/TextContent";
import styles from "./Content.module.css";
import SavedNotes from "./items/SavedNotes";
export default function Content() {
  return (
    <div className={styles.main}>
      <TextContent />
      <SavedNotes />
    </div>
  );
}

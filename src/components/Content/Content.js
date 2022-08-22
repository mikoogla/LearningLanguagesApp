import React from "react";
import TextContent from "./Text/TextContent";
import styles from "./Content.module.css";
import SavedNotes from "./Notes/SavedNotes";
import Dictionary from "./Dictionary/Dictionary";
export default function Content() {
  return (
    <div className={styles.main}>
      <TextContent />
      <SavedNotes />
      <Dictionary />
    </div>
  );
}

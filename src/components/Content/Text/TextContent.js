import React from "react";
import { useSelector } from "react-redux";
import Words from "./Words/Words";
import Card from "../../UI/Card/Card";
import styles from "./TextContent.module.css";

export default function TextContent() {
  const title = useSelector((state) => state.logic.currentNote.title);
  const stats = useSelector((state) => state.counter);
  const sum = stats.known + stats.uncertain + stats.unknown;
  return (
    <Card className={styles.content}>
      <h1>{title}</h1>
      <div className={styles.additionalInfo}>
        <h2>additional info</h2>
        <div className={styles.stats}>
          <div style={{ color: "rgb(191, 243, 191)" }}>
            {sum === 0 ? 0 : ((stats.known * 100) / sum).toFixed(0)}%
          </div>
          <div style={{ color: "rgb(240, 226, 149)" }}>
            {sum === 0 ? 0 : ((stats.uncertain * 100) / sum).toFixed(0)}%
          </div>
        </div>
      </div>
      <Words />
    </Card>
  );
}

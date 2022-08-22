import React from "react";
import { useSelector } from "react-redux";
import Card from "../../UI/Card/Card";
import styles from "./TextContent.module.css";

export default function TextContent() {
  const text = useSelector((state) => state.logic.currentNote.text).split(" ");
  const title = useSelector((state) => state.logic.currentNote.title);
  const wordHandler = (word) => {
    console.log(word.trim().replace(/[., ]/, "").toLowerCase());
  };
  const WordsToLinks = (nn) => {
    return (
      <>
        <div className={styles.xyz}>
          {nn.map((word) => {
            if (word === " " || word === "") return "";
            if (word.length % 2 === 0) {
              return (
                <>
                  <button className="known" onClick={() => wordHandler(word)}>
                    {word.trim()}{" "}
                  </button>
                  {word.includes("\n") && <br />}
                </>
              );
            }
            if (word.length % 5 === 0) {
              return (
                <>
                  <button
                    className="uncertain"
                    onClick={() => wordHandler(word)}
                  >
                    {word.trim()}{" "}
                  </button>
                  {word.includes("\n") && <br />}
                </>
              );
            } else {
              return (
                <>
                  <button className="unknown" onClick={() => wordHandler(word)}>
                    {word.trim()}{" "}
                  </button>
                  {word.includes("\n") && <br />}
                </>
              );
            }
          })}
        </div>
      </>
    );
  };

  return (
    <Card className={styles.content}>
      <h1>{title}</h1>
      <h2>Author info</h2>
      <Card className={styles.textcontainer}>{WordsToLinks(text)}</Card>
    </Card>
  );
}

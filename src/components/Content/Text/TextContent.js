import React from "react";

import Card from "../../UI/Card/Card";
import styles from "./Styles.module.css";
import text from "../SampleText.js";
const textSplitOnWords = text.split(" ");

export default function TextContent() {
  const wordHandler = (word) => {
    console.log(word.trim().replace(/[., ]/, "").toLowerCase());
  };
  const WordsToLinks = () => {
    return (
      <>
        <div className={styles.xyz}>
          {textSplitOnWords.map((word) => {
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
      <h1>Ardenti Rubi</h1>
      <h2>Liber Exodus</h2>
      <Card className={styles.textcontainer}>{WordsToLinks()}</Card>
    </Card>
  );
}

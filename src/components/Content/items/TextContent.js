import React from "react";
import { useSelector } from "react-redux";
import Card from "../../UI/Card/Card";
import styles from "./Styles.module.css";
import text from "./SampleText.js";
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
  const isHidden = useSelector((state) => state.cart.hide);

  return (
    <>
      {!isHidden && (
        <Card className={styles.content}>
          <h2>You will see your text here</h2>
          <Card className={styles.textcontainer}>{WordsToLinks()}</Card>
        </Card>
      )}
    </>
  );
}

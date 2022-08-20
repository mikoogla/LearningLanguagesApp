import React from "react";
import { useSelector } from "react-redux";
import Card from "../../UI/Card/Card";
import styles from "./Styles.module.css";
import text from "./SampleText.js";
console.log(text);
const textSplitOnWords = text.split(" ");
console.log(textSplitOnWords);

export default function TextContent() {
  const WordsToLinks = () => {
    return (
      <div>
        {textSplitOnWords.map((word) => {
          if (word.length % 2 === 0) {
            return (
              <a className="known" href={word}>
                {word}{" "}
              </a>
            );
          } else {
            return (
              <a className="unknown" href={word}>
                {word}{" "}
              </a>
            );
          }
        })}
      </div>
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

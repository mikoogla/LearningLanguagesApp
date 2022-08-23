import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWord } from "../../../store";
import Card from "../../UI/Card/Card";
import styles from "./TextContent.module.css";

export default function TextContent() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.logic.currentNote.text)
    .replace(/\n/g, " \n ")
    .split(" ");
  const dictionary = useSelector((state) => state.dictionary.dictionary);

  const title = useSelector((state) => state.logic.currentNote.title);
  const wordClickHandler = (word, state) => {
    const newWord = word.trim().replace(/[., ]/, "").toLowerCase();
    console.log(newWord);
    const newstate = () => {
      if (state === "known") {
        return "uncertain";
      } else if (state === "uncertain") {
        return "unknown";
      } else {
        return "known";
      }
    };
    console.log("new state: ", newstate());
    dispatch(addWord({ word: newWord, state: newstate() }));
  };
  const WordsToLinks = (word) => {
    return (
      <>
        <div className={styles.xyz}>
          {word.map((word) => {
            if (word === " " || word === "") return "";
            const newWord = word.trim().replace(/[., ]/, "").toLowerCase();
            let state = "1";

            if (dictionary) {
              const index = dictionary.map((e) => e.word).indexOf(newWord);
              if (index !== -1) {
                state = dictionary[index].state;
              } else {
                state = "unknown";
              }
            } else {
              state = "unknown";
            }
            console.log("state", state);
            return (
              <>
                <button
                  className={state}
                  onClick={() => wordClickHandler(word, state)}
                >
                  {word.trim()}{" "}
                </button>
                {word.includes("\n") && <br />}
              </>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <Card className={styles.content}>
      <h1>{title}</h1>
      <div className={styles.additionalInfo}>
        <h2>additional info</h2>
        <div className={styles.stats}>
          <div style={{ color: "rgb(191, 243, 191)" }}>80%</div>
          <div style={{ color: "rgb(240, 226, 149)" }}>20%</div>
        </div>
      </div>
      <Card className={styles.textcontainer}>{WordsToLinks(text)}</Card>
    </Card>
  );
}

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCounter } from "../../../../store";
import Card from "../../../UI/Card/Card";
import WordItem from "../WordItem/WordItem";
import styles from "./Words.module.css";

export default function Words() {
  const dispatch = useDispatch();
  const dictionary = useSelector((state) => state.dictionary.dictionary);
  const textToWords = useSelector((state) => state.logic.currentNote.text)
    .replace(/\n/g, " \n ")
    .split(" ");

  const stats = React.useMemo(() => {
    return {
      known: 0,
      uncertain: 0,
      unknown: 0,
    };
  });

  React.useEffect(() => {
    dispatch(
      updateCounter({
        known: stats.known,
        uncertain: stats.uncertain,
        unknown: stats.unknown,
      })
    );
    return () => {
      dispatch(
        updateCounter({
          known: stats.known,
          uncertain: stats.uncertain,
          unknown: stats.unknown,
        })
      );
    };
  }, [dispatch, stats, dictionary]);
  const formatWord = (word) => {
    return word
      .toLowerCase()
      .replace(/[()¿=:+-_.,'"'“”!?\s]/g, "")
      .trim();
  };

  const WordToButton = (data) => {
    return (
      <div className={styles.xyz}>
        {data.map((word) => {
          if (word === " " || word === "") return "";
          const newWord = formatWord(word);
          let state = "unknown";

          if (dictionary) {
            const index = dictionary.map((e) => e.word).indexOf(newWord);
            if (index !== -1) {
              state = dictionary[index].state;
              if (state === "known") {
                stats.known++;
              } else if (state === "uncertain") {
                stats.uncertain++;
              } else if (state === "unknown") {
                stats.unknown++;
              }
            } else {
              state = "unknown";
              stats.unknown++;
            }
          }
          return <WordItem word={word} state={state} />;
        })}
      </div>
    );
  };

  return (
    <Card className={styles.textcontainer}>{WordToButton(textToWords)}</Card>
  );
}

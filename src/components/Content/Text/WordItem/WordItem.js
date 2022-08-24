import React from "react";
import { useDispatch } from "react-redux";
import { addWord, touch } from "../../../../store";
export default function WordItem(props) {
  const dispatch = useDispatch();
  const formatWord = (word) => {
    return word
      .toLowerCase()
      .replace(/[()¿=:+-_.,'"'“”!?\s]/g, "")
      .trim();
  };

  const wordClickHandler = (word, state) => {
    dispatch(touch());
    const newWord = formatWord(word);
    const newstate = () => {
      if (state === "known") {
        return "uncertain";
      } else if (state === "uncertain") {
        return "unknown";
      } else if (state === "unknown") {
        return "known";
      }
    };
    console.log("new state: ", newstate());
    dispatch(addWord({ word: newWord, state: newstate() }));
  };
  return (
    <>
      <button
        className={props.state}
        onClick={() => wordClickHandler(props.word, props.state)}
      >
        {props.word}
      </button>
      {props.word.includes("\n") && <br />}
    </>
  );
}

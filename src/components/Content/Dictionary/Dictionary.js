import React from "react";
import { useSelector } from "react-redux";
import Card from "../../UI/Card/Card";
import styles from "./Dictionary.module.css";

export default function Dictionary() {
  const words = useSelector((state) => state.dictionary.dictionary);
  return (
    <Card className={styles.content}>
      <h1>Dictionary</h1>
      <h2>Your words:</h2>
      <div className={styles.wordlist}>
        {words.map((word) => (
          <div className={`${word.state}`} key={word.id}>
            {word.word}
          </div>
        ))}

        {words.map((word) => (
          <div className={`${word.state}`} key={word.id}>
            {word.word}
          </div>
        ))}

        {words.map((word) => (
          <div className={`${word.state}`} key={word.id}>
            {word.word}
          </div>
        ))}

        {words.map((word) => (
          <div className={`${word.state}`} key={word.id}>
            {word.word}
          </div>
        ))}

        {words.map((word) => (
          <div className={`${word.state}`} key={word.id}>
            {word.word}
          </div>
        ))}
        {words.map((word) => (
          <div className={`${word.state}`} key={word.id}>
            {word.word}
          </div>
        ))}
        {words.map((word) => (
          <div className={`${word.state}`} key={word.id}>
            {word.word}
          </div>
        ))}
        {words.map((word) => (
          <div className={`${word.state}`} key={word.id}>
            {word.word}
          </div>
        ))}
        {words.map((word) => (
          <div className={`${word.state}`} key={word.id}>
            {word.word}
          </div>
        ))}
      </div>
    </Card>
  );
}

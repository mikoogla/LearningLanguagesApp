import React, { forwardRef } from "react";
import styles from "./TextArea.module.css";
const Input = forwardRef((props, ref) => {
  return (
    <textarea
      {...props}
      ref={ref}
      className={`${styles.input} ${props.className}`}
    />
  );
});

export default Input;

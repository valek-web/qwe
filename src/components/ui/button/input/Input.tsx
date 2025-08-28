import React from "react";

import styles from "./input.module.css";

interface Props {
  value: string;
  setValue: (text: string) => void;
  placeholder: string;
}

const Input = ({ value, setValue, placeholder }: Props) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;

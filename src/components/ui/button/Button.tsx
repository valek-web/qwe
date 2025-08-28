import React, { ReactNode } from "react";
import styles from "./button.module.css";

interface Props {
  children: ReactNode;
  className?: string;
}
const Button = ({ children, className }: Props) => {
  return <button className={`${styles.button} ${className}`}>{children}</button>;
};

export default Button;

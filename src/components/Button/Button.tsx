import React from 'react';
import { FC } from "react";
import styles from "./Button.module.scss";

interface IButton {
  type: "button" | "submit" | "reset";
  text: string;
  width: number;
  height: number;
  backgroundColor?:string,
  color?:string,
}

const Button: FC<IButton> = ({
  type = "button",
  text,
  width,
  height,
  backgroundColor,
  color,
}) => {
  return (
    <button
      className={styles.button}
      type={type}
      style={{ width: width, height: height, backgroundColor: backgroundColor, color:color }}
    >
      <span className={styles.button__text}>{text}</span>
    </button>
  );
};

export default Button;

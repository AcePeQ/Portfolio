import { MouseEventHandler } from "react";
import styles from "./Button.module.css";

function Button({
  children,
  type,
  onClick,
}: {
  children: string;
  type: string;
  onClick: MouseEventHandler;
}) {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[type]} `}>
      {children}
    </button>
  );
}

export default Button;

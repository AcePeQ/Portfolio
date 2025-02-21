import { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.css";

function Button({
  children,
  type,
  onClick,
}: {
  children: ReactNode;
  type: string;
  onClick: MouseEventHandler;
}) {
  return (
    <button
      role="button"
      onClick={onClick}
      className={`${styles.button} ${styles[type]} `}
    >
      {children}
    </button>
  );
}

export default Button;

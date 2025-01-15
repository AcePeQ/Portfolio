import styles from "./GoToTopButton.module.css";

import { HiArrowUpCircle } from "react-icons/hi2";

function GoToTopButton() {
  return (
    <button className={styles.button}>
      Go To Top <HiArrowUpCircle />
    </button>
  );
}

export default GoToTopButton;

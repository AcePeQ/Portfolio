import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";

import { motion } from "motion/react";

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.6, type: "tween" }}
      className={styles.header}
    >
      <Logo />
      <Navigation />
    </motion.header>
  );
}

export default Header;

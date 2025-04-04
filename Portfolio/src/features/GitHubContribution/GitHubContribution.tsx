import styles from "./GitHubContribution.module.css";

import { motion } from "motion/react";

function GitHubContribution() {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100px" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      animate={{ opacity: 1, y: "0" }}
      className={styles.github_wrapper}
    >
      <h2 className={styles.title}>My Github Contribution</h2>
      <img
        src="https://ghchart.rshah.org/000000/acepeq"
        alt="AcePeQ's Github contribution chart"
      />
    </motion.section>
  );
}

export default GitHubContribution;

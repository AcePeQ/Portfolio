import {
  technologiesPlanToLearn,
  technologiesUsed,
  toolsUsed,
} from "../../../utils/technologies";
import TechnologyItem from "./TechnologyItem/TechnologyItem";
import styles from "./TechnologyStack.module.css";

import { motion } from "motion/react";

function TechnologyStack() {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100px" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      animate={{ opacity: 1, y: "0" }}
      className={styles.technology_stacks}
    >
      <div className={styles.technology_used}>
        <h2 className={styles.technology_title}>Technologies I've used</h2>
        <ul className={styles.technologies_list}>
          {technologiesUsed.map((technology) => (
            <TechnologyItem key={technology.label} technology={technology} />
          ))}
        </ul>
      </div>

      <div className={styles.technology_used}>
        <h2 className={styles.technology_title}>Tools I've used</h2>
        <ul className={styles.technologies_list}>
          {toolsUsed.map((technology) => (
            <TechnologyItem key={technology.label} technology={technology} />
          ))}
        </ul>
      </div>

      <div className={styles.technology_learn}>
        <h2 className={styles.technology_title}>
          Technologies I want to learn
        </h2>
        <ul className={styles.technologies_list}>
          {technologiesPlanToLearn.map((technology) => (
            <TechnologyItem key={technology.label} technology={technology} />
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

export default TechnologyStack;

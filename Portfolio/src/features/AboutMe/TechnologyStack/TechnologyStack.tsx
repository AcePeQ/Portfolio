import {
  technologiesPlanToLearn,
  technologiesUsed,
  toolsUsed,
} from "../../../utils/technologies";
import TechnologyItem from "./TechnologyItem/TechnologyItem";
import styles from "./TechnologyStack.module.css";

function TechnologyStack() {
  return (
    <section className={styles.technology_stacks}>
      <div className={styles.technology_used}>
        <h2 className={styles.technology_title}>Technologies I've used</h2>
        <ul className={styles.technologies_list}>
          {technologiesUsed.map((technology) => (
            <TechnologyItem technology={technology} />
          ))}
        </ul>
      </div>

      <div className={styles.technology_used}>
        <h2 className={styles.technology_title}>Tools I've used</h2>
        <ul className={styles.technologies_list}>
          {toolsUsed.map((technology) => (
            <TechnologyItem technology={technology} />
          ))}
        </ul>
      </div>

      <div className={styles.technology_learn}>
        <h2 className={styles.technology_title}>
          Technologies I want to learn
        </h2>
        <ul className={styles.technologies_list}>
          {technologiesPlanToLearn.map((technology) => (
            <TechnologyItem technology={technology} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TechnologyStack;

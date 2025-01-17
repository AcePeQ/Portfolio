import TechnologyItem from "./TechnologyItem/TechnologyItem";
import styles from "./TechnologyStack.module.css";

const technologyUsed = [
  { label: "HTML", src: "html-icon.png" },
  { label: "CSS", src: "css-icon.png" },
  { label: "JavaScript", src: "js-icon.png" },
  { label: "React", src: "react-icon.png" },
  { label: "TypeScript", src: "ts-icon.png" },
  { label: "C-sharp", src: "c-sharp-icon.png" },
  { label: "MySql", src: "mysql-icon.png" },
];

function TechnologyStack() {
  return (
    <div className={styles.technology_stacks}>
      <div className={styles.technology_used}>
        <h3 className={styles.technology_title}>Technologies I've used</h3>
        <ul className={styles.technologies_list}>
          {technologyUsed.map((technology) => (
            <TechnologyItem technology={technology} />
          ))}
        </ul>
      </div>

      <div className={styles.technology_learn}>
        <h3 className={styles.technology_title}>
          Technologies I want to learn
        </h3>
        <ul className={styles.technologies_list}>Essa2</ul>
      </div>
    </div>
  );
}

export default TechnologyStack;

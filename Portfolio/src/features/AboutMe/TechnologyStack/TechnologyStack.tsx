import TechnologyItem from "./TechnologyItem/TechnologyItem";
import styles from "./TechnologyStack.module.css";

const technologiesUsed = [
  { label: "HTML", src: "html.svg" },
  { label: "CSS", src: "css.svg" },
  { label: "JavaScript", src: "js.svg" },
  { label: "React", src: "react.svg" },
  { label: "TypeScript", src: "typescript.svg" },
  { label: "C-sharp", src: "c-sharp.svg" },
  { label: "MySql", src: "mysql.svg" },
];

const technologiesPlanToLearn = [
  { label: "Node JS", src: "nodejs-2.svg" },
  { label: "Mango DB", src: "mangodb.svg" },
];

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

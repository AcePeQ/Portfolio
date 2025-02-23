import TechnologyItem from "./TechnologyItem/TechnologyItem";
import styles from "./TechnologyStack.module.css";

const technologiesUsed = [
  { label: "HTML", src: "html.svg" },
  { label: "CSS", src: "css.svg" },
  { label: "JavaScript", src: "js.svg" },
  { label: "React", src: "react.svg" },
  { label: "TypeScript", src: "typescript.svg" },
  { label: "Bootstrap", src: "bootstrap.svg" },
  { label: "C#", src: "c-sharp.svg" },
  { label: "MySql", src: "mysql.svg" },
];

const technologiesPlanToLearn = [
  { label: "Node JS", src: "nodejs-2.svg" },
  { label: "Next JS", src: "nextjs.png" },
  { label: "Mango DB", src: "mangodb.svg" },
  { label: "Tailwind CSS", src: "tailwind.svg" },
];

const toolsUsed = [
  { label: "VS Code", src: "vscode.svg" },
  { label: "Visual Studio", src: "vstudio.svg" },
  { label: "Figma", src: "figma.svg" },
  { label: "Github", src: "github.svg" },
  { label: "Git", src: "git.svg" },
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

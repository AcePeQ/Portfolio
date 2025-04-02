import styles from "./ProjectTechnology.module.css";

function ProjectTechnology({
  technology,
}: {
  technology: { label: string; src: string };
}) {
  return (
    <div className={styles.technology}>
      <img
        src={technology.src}
        alt={`icon of ${technology.label}`}
        className={styles.icon}
        loading="lazy"
      />
      <span className={styles.filter_name}>{technology.label}</span>
    </div>
  );
}

export default ProjectTechnology;

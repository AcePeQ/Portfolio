import styles from "./ProjectTechnology.module.css";

function ProjectTechnology({
  technology,
}: {
  technology: { label: string; img_path: string };
}) {
  return (
    <div className={styles.technology}>
      <img
        src={technology.img_path}
        alt={`icon of ${technology.label}`}
        className={styles.icon}
        loading="lazy"
      />
      <span className={styles.filter_name}>{technology.label}</span>
    </div>
  );
}

export default ProjectTechnology;

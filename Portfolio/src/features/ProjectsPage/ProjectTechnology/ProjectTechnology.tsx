import styles from "./ProjectTechnology.module.css";

function ProjectTechnology() {
  return (
    <div className={styles.technology}>
      <img
        src={`/svgIcons/html.svg`}
        alt={`icon of html`}
        className={styles.icon}
        loading="lazy"
      />
      <span className={styles.filter_name}>HTML</span>
    </div>
  );
}

export default ProjectTechnology;

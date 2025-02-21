import { ProjectFilterType } from "../../../utils/types";
import styles from "./ProjectFilter.module.css";

function ProjectFilter({ filter }: { filter: ProjectFilterType }) {
  return (
    <button className={styles.filter}>
      <img
        src={`/public/svgIcons/${filter.src}.svg`}
        alt={`icon of ${filter.name}`}
        className={styles.icon}
      />
      <span role="filter-name" className={styles.filter_name}>
        {filter.name}
      </span>
    </button>
  );
}

export default ProjectFilter;

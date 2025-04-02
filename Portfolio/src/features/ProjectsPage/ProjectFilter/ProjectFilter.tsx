import { ProjectFilterType } from "../../../utils/types";
import styles from "./ProjectFilter.module.css";

function ProjectFilter({
  filter,
  onClick,
}: {
  filter: ProjectFilterType;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className={styles.filter}>
      <img
        src={`/svgIcons/${filter.src}`}
        alt={`icon of ${filter.label}`}
        className={styles.icon}
      />
      <span role="filter-name" className={styles.filter_name}>
        {filter.label}
      </span>
    </button>
  );
}

export default ProjectFilter;

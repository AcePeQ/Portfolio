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
        src={`/svgIcons/${filter.src}.svg`}
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

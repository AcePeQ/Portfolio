import { useProjectFilter } from "../../../stores/useProjectFilterStore";
import { ProjectFilterType } from "../../../utils/types";
import styles from "./ProjectFilter.module.css";

function ProjectFilter({ filter }: { filter: ProjectFilterType }) {
  const { activeFilter, setActiveFilter } = useProjectFilter();

  function handleClickFilter() {
    const filterClick = activeFilter === filter.label ? null : filter.label;
    setActiveFilter(filterClick);
  }

  return (
    <button
      onClick={handleClickFilter}
      className={`${styles.filter} ${
        styles[activeFilter === filter.label ? "active" : ""]
      }`}
    >
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

import { technologiesUsed } from "../../../utils/technologies";
import ProjectFilter from "../ProjectFilter/ProjectFilter";
import styles from "./ProjectFilters.module.css";

function ProjectFilters() {
  return (
    <div className={styles.filters_wrapper}>
      {technologiesUsed.map((tech) => (
        <ProjectFilter key={tech.label} onClick={() => {}} filter={tech} />
      ))}
    </div>
  );
}

export default ProjectFilters;

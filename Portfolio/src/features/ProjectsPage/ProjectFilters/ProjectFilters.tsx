import ProjectFilter from "../ProjectFilter/ProjectFilter";
import styles from "./ProjectFilters.module.css";

function ProjectFilters() {
  return (
    <div className={styles.filters_wrapper}>
      <ProjectFilter filter={{ name: "HTML", src: "html" }} />
      <ProjectFilter filter={{ name: "CSS", src: "css" }} />
      <ProjectFilter filter={{ name: "JavaScript", src: "js" }} />
      <ProjectFilter filter={{ name: "React", src: "react" }} />
    </div>
  );
}

export default ProjectFilters;

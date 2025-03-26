import ProjectFilter from "../ProjectFilter/ProjectFilter";
import styles from "./ProjectFilters.module.css";

function ProjectFilters() {
  return (
    <div className={styles.filters_wrapper}>
      <ProjectFilter
        onClick={() => {}}
        filter={{ name: "HTML", src: "html" }}
      />
      <ProjectFilter onClick={() => {}} filter={{ name: "CSS", src: "css" }} />
      <ProjectFilter
        onClick={() => {}}
        filter={{ name: "JavaScript", src: "js" }}
      />
      <ProjectFilter
        onClick={() => {}}
        filter={{ name: "React", src: "react" }}
      />
    </div>
  );
}

export default ProjectFilters;

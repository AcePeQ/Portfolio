import ProjectCard from "../../features/ProjectsPage/ProjectCard";
import ProjectFilters from "../../features/ProjectsPage/ProjectFilters/ProjectFilters";
import { projectArray } from "../../utils/projects";
import styles from "./ProjectsPage.module.css";

function ProjectsPage() {
  return (
    <section className={styles.section_projects}>
      <h1 className={styles.section_title}>My projects</h1>

      <div className={styles.projects_wrapper}>
        <ProjectFilters />

        <div className={styles.projects}>
          {projectArray.map((project) => (
            <ProjectCard key={project.project_name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;

import ProjectCard from "../../features/ProjectsPage/ProjectCard";
import ProjectFilters from "../../features/ProjectsPage/ProjectFilters/ProjectFilters";
import styles from "./ProjectsPage.module.css";

function ProjectsPage() {
  return (
    <section className={styles.section_projects}>
      <h1 className={styles.section_title}>My projects</h1>

      <div className={styles.projects_wrapper}>
        <ProjectFilters />

        <div className={styles.projects}>
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;

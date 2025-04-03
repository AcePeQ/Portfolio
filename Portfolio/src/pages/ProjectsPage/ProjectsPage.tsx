import { useEffect, useState } from "react";
import ProjectCard from "../../features/ProjectsPage/ProjectCard";
import ProjectFilters from "../../features/ProjectsPage/ProjectFilters/ProjectFilters";
import { projectArray } from "../../utils/projects";
import styles from "./ProjectsPage.module.css";
import { useProjectFilter } from "../../stores/useProjectFilterStore";

function ProjectsPage() {
  const [projects, setProjects] = useState(projectArray);
  const { activeFilter } = useProjectFilter();

  useEffect(() => {
    if (activeFilter) {
      const filteredProjects = projectArray.filter((project) =>
        project.technologiesUsed.includes(activeFilter as string)
      );
      setProjects(filteredProjects);
    }

    if (!activeFilter) {
      setProjects(projectArray);
    }
  }, [activeFilter]);

  return (
    <section className={styles.section_projects}>
      <h1 className={styles.section_title}>My projects</h1>

      <div className={styles.projects_wrapper}>
        <ProjectFilters />

        <div className={styles.projects}>
          {projects.length === 0 && (
            <p className={styles.notify}>
              Unfortunately, there is no project using {activeFilter}
            </p>
          )}
          {projects.map((project) => (
            <ProjectCard key={project.project_name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;

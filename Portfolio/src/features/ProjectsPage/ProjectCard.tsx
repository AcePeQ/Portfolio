import styles from "./ProjectCard.module.css";
import { FaGithub } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";
import ProjectTechnology from "./ProjectTechnology/ProjectTechnology";

import { motion } from "motion/react";

export interface IProjectCard {
  project_name: string;
  project_type: string;
  img_href: string;
  type: string;
  event: string;
  year: number | string;
  github_link: string;
  page_link?: string;
  description: string;
  technologies: { label: string; src: string }[];
  technologiesUsed: string[];
}

function ProjectCard({ project }: { project: IProjectCard }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100px" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      whileInView={{ opacity: 1, y: "0" }}
      viewport={{ once: true }}
      className={styles.project_wrapper}
    >
      <div className={styles.header}>
        <h2>{project.project_name}</h2>
        <h3>{project.project_type}</h3>
      </div>

      <div className={styles.image_wrapper}>
        <a
          className={styles.image_link}
          href={project.page_link || project.github_link}
          target="_blank"
        >
          <img
            className={styles.image}
            src={project.img_href}
            alt={`main page of project ${project.project_name}`}
            loading="lazy"
          />
        </a>
      </div>

      <div className={styles.row_container}>
        <div className={styles.row_header}>
          <div>
            <p className={styles.row_subtext}>Type</p>
            <p className={styles.row_main_text}>{project.type}</p>
          </div>

          <div>
            <p className={styles.row_subtext}>Event</p>
            <p className={styles.row_main_text}>{project.event}</p>
          </div>

          <div>
            <p className={styles.row_subtext}>Year</p>
            <p className={styles.row_main_text}>{project.year}</p>
          </div>
        </div>

        <div className={styles.description_wrapper}>
          <div className={styles.description_row}>
            <p className={styles.description_title}>Description</p>
            <p className={styles.description}>{project.description}</p>
          </div>

          <div className={styles.link_wrapper}>
            <a href={project.github_link} className={styles.link}>
              <FaGithub />
            </a>

            {project.page_link && (
              <a
                href={project.page_link}
                className={`${styles.link} ${styles.link_page}`}
              >
                <IoArrowForwardOutline />
              </a>
            )}
          </div>
        </div>

        <div className={styles.tech_stack}>
          <p className={styles.row_subtext}>Technologies</p>
          <div className={styles.technologies}>
            {project.technologies.map((techno) => (
              <ProjectTechnology key={techno.label} technology={techno} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectCard;

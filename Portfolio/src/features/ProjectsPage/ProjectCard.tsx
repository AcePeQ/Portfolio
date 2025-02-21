import styles from "./ProjectCard.module.css";
import { FaGithub } from "react-icons/fa";

function ProjectCard() {
  return (
    <section role="project card" className={styles.project_wrapper}>
      <div className={styles.header}>
        <h2>Project Name</h2>
        <h3>Project Type</h3>
      </div>

      <div className={styles.image_wrapper}>
        <a className={styles.image_link} href="#" target="_blank">
          <img
            className={styles.image}
            src="/public/fanatycy.png"
            alt="main page of my project: [project name]"
          />
        </a>
      </div>

      <div className={styles.row_container}>
        <div className={styles.row_header}>
          <div>
            <p className={styles.row_subtext}>Type</p>
            <p className={styles.row_main_text}>Main Text</p>
          </div>

          <div>
            <p className={styles.row_subtext}>Event</p>
            <p className={styles.row_main_text}>Main Text</p>
          </div>

          <div>
            <p className={styles.row_subtext}>Year</p>
            <p className={styles.row_main_text}>Main Text</p>
          </div>
        </div>

        <div className={styles.description_wrapper}>
          <div className={styles.description_row}>
            <p className={styles.description_title}>Description</p>
            <p className={styles.description}></p>
          </div>

          <div className={styles.link_wrapper}>
            <a href="#" className={styles.link}>
              <FaGithub />
            </a>
          </div>
        </div>

        <div className={styles.tech_stack}>
          <p>Technologies</p>
          <div className={styles.technologies}></div>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;

import styles from "./ProjectCard.module.css";
import { FaGithub } from "react-icons/fa";
import { IoArrowForwardOutline } from "react-icons/io5";
import ProjectTechnology from "./ProjectTechnology/ProjectTechnology";

function ProjectCard() {
  return (
    <section className={styles.project_wrapper}>
      <div className={styles.header}>
        <h2>Project Name</h2>
        <h3>Project Type</h3>
      </div>

      <div className={styles.image_wrapper}>
        <a className={styles.image_link} href="#" target="_blank">
          <img
            className={styles.image}
            src="/projectsImage/fanatycy.png"
            alt="main page of my project: [project name]"
            loading="lazy"
          />
        </a>
      </div>

      <div className={styles.row_container}>
        <div className={styles.row_header}>
          <div>
            <p className={styles.row_subtext}>Type</p>
            <p className={styles.row_main_text}>Website</p>
          </div>

          <div>
            <p className={styles.row_subtext}>Event</p>
            <p className={styles.row_main_text}>Side Project</p>
          </div>

          <div>
            <p className={styles.row_subtext}>Year</p>
            <p className={styles.row_main_text}>2024</p>
          </div>
        </div>

        <div className={styles.description_wrapper}>
          <div className={styles.description_row}>
            <p className={styles.description_title}>Description</p>
            <p className={styles.description}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              provident veniam, quidem quasi modi earum obcaecati qui veritatis
              debitis maxime, nihil tempora voluptatum sed! Sunt quod nobis
              neque necessitatibus culpa? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Consequatur laborum aliquid dolor
              dolores ex sint delectus, repellendus deleniti nesciunt
              exercitationem nulla voluptas, quis libero, aliquam eveniet aut
              nihil? Placeat, necessitatibus.
            </p>
          </div>

          <div className={styles.link_wrapper}>
            <a href="#" className={styles.link}>
              <FaGithub />
            </a>

            <a href="#" className={`${styles.link} ${styles.link_page}`}>
              <IoArrowForwardOutline />
            </a>
          </div>
        </div>

        <div className={styles.tech_stack}>
          <p className={styles.row_subtext}>Technologies</p>
          <div className={styles.technologies}>
            <ProjectTechnology />
            <ProjectTechnology />
            <ProjectTechnology />
            <ProjectTechnology />
            <ProjectTechnology />
            <ProjectTechnology />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;

import styles from "./Introduce.module.css";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { motion } from "motion/react";

function Introduce() {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100px" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      animate={{ opacity: 1, y: "0" }}
      className={styles.introduce_wrapper}
    >
      <div className={styles.image_box}>
        <img
          src="/face3.jpg"
          alt="Photo of Maciej Nojszewski, dark hair, blue eyes"
          title="Photo of myself"
        />

        <div className={styles.socials}>
          <a href="https://github.com/AcePeQ" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/maciej-nojszewski-81359a35a/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className={styles.introduce_box}>
        <h1 className={styles.introduce_header}>
          Hi, I'm <span className={styles.no_break}>Maciej Nojszewski</span>
        </h1>

        <p className={styles.introduce_text}>
          I'm an aspiring frontend React developer from Grębków, Poland and an
          IT student at WIT Academy in Warsaw.
        </p>
        <p className={styles.introduce_text}>
          I primarily focus on frontend development using React & Typescript,
          and I enjoy exploring and learning new things in my spare time. I've
          been self-taught for over 2 years and am still striving to dive deeper
          into the world of programming to learn more.
        </p>
      </div>
    </motion.section>
  );
}

export default Introduce;

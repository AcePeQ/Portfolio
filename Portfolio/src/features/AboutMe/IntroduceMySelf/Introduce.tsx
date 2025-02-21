import styles from "./Introduce.module.css";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Introduce() {
  return (
    <section className={styles.introduce_wrapper}>
      <div className={styles.image_box}>
        <img
          src="/public/test-photo.jpg"
          alt="Photo of Maciej Nojszewski, dark hair, blue eyes"
          title="Photo of myself"
        />

        <div className={styles.socials}>
          <FaGithub />
          <FaLinkedin />
        </div>
      </div>

      <div className={styles.introduce_box}>
        <h1 className={styles.introduce_header}>Hi, I'm Maciej Nojszewski</h1>
        <div className={styles.hr_box}>
          <hr className={styles.line_hr} />
          <div className={styles.cube}>Cube</div>
        </div>
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
    </section>
  );
}

export default Introduce;

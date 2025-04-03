import styles from "./Hero.module.css";
import DownloadButton from "../DownloadButton/DownloadButton";

import { motion } from "motion/react";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-50%" }}
      animate={{ opacity: 1, x: "0%" }}
      transition={{ duration: 2, type: "spring" }}
      className={styles.hero_wrapper}
    >
      <h1>
        <span role="greeting container" className={styles.greeting}>
          Hi, I'm
        </span>
        <br />
        <span role="name container" className={styles.name}>
          Maciej Nojszewski
        </span>
        <br />
        <span role="profession container" className={styles.profession}>
          I'm a {`\n`}
          <span role="text highlight" className={styles.highlight}>
            Frontend Developer
          </span>
        </span>
      </h1>
      <p className={styles.subtext}>
        I'm currently focused on expending my experince designing and developing
        modern websites
      </p>

      <div className={styles.buttons_wrapper}>
        <DownloadButton>Resume</DownloadButton>
        <a
          className={styles.contact_button}
          href="https://www.linkedin.com/in/maciej-nojszewski-81359a35a/"
          target="_blank"
        >
          Contact
        </a>
      </div>
    </motion.div>
  );
}

export default Hero;

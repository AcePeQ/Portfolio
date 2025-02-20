import styles from "./Hero.module.css";
import DownloadButton from "../DownloadButton/DownloadButton";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <h1>
        <span className={styles.greeting}>Hi, I'm</span> <br />
        <span className={styles.name}>Maciej Nojszewski</span> <br />
        <span className={styles.profession}>
          I'm a <span className={styles.highlight}>Frontend Developer</span>
        </span>
      </h1>
      <p className={styles.subtext}>
        I'm currently focused on expending my experince designing and developing
        modern websites
      </p>

      <DownloadButton>Resume</DownloadButton>
    </div>
  );
}

export default Hero;

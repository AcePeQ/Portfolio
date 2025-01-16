import Introduce from "../../features/AboutMe/IntroduceMySelf/Introduce";
import styles from "./AboutMePage.module.css";

function AboutMePage() {
  return (
    <div className={styles.aboutme_wrapper}>
      <Introduce />
    </div>
  );
}

export default AboutMePage;

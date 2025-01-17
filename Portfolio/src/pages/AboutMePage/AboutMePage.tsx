import Introduce from "../../features/AboutMe/IntroduceMySelf/Introduce";
import TechnologyStack from "../../features/AboutMe/TechnologyStack/TechnologyStack";
import GitHubContribution from "../../features/GitHubContribution/GitHubContribution";
import styles from "./AboutMePage.module.css";

function AboutMePage() {
  return (
    <div className={styles.aboutme_wrapper}>
      <Introduce />
      <TechnologyStack />
      <GitHubContribution />
    </div>
  );
}

export default AboutMePage;

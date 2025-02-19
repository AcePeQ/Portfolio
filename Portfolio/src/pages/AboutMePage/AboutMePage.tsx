import Introduce from "../../features/AboutMe/IntroduceMySelf/Introduce";
import TechnologyStack from "../../features/AboutMe/TechnologyStack/TechnologyStack";
import Cube3D from "../../features/Cube3D/Cube3D";
import GitHubContribution from "../../features/GitHubContribution/GitHubContribution";
import styles from "./AboutMePage.module.css";

function AboutMePage() {
  return (
    <section className={styles.aboutme_wrapper}>
      <Introduce />
      <TechnologyStack />
      <GitHubContribution />
      <Cube3D />
    </section>
  );
}

export default AboutMePage;

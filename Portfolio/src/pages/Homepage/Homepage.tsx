import styles from "./Homepage.module.css";
import Hero from "../../ui/Hero/Hero";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <Hero />
    </div>
  );
}

export default Homepage;

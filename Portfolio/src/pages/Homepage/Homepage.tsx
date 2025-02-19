import styles from "./Homepage.module.css";
import Hero from "../../ui/Hero/Hero";

function Homepage() {
  return (
    <section className={styles.homepage}>
      <Hero />
    </section>
  );
}

export default Homepage;

import styles from "./Homepage.module.css";
import Hero from "../../ui/Hero/Hero";
import Planet from "../../features/Planet/Planet";

function Homepage() {
  return (
    <section className={styles.homepage}>
      <Hero />
      <Planet />
    </section>
  );
}

export default Homepage;

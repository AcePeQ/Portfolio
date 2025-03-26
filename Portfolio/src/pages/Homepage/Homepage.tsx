import styles from "./Homepage.module.css";
import Hero from "../../ui/Hero/Hero";
// import Planet from "../../features/Planet/Planet";

function Homepage() {
  return (
    <section className={styles.homepage}>
      <Hero />
      {/* <Planet /> */}
      <figure className={styles.img_box}>
        <img
          src="/face.png"
          alt="photo of Maciej Nojszewski, illustration style, short dark/brown hair, blue eyes"
          className={styles.img}
        />
      </figure>
    </section>
  );
}

export default Homepage;

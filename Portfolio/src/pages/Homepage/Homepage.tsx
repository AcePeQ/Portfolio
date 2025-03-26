import styles from "./Homepage.module.css";
import Hero from "../../ui/Hero/Hero";
// import Planet from "../../features/Planet/Planet";

function Homepage() {
  return (
    <section className={styles.homepage}>
      <Hero />
      {/* <Planet /> */}
      <figure className={styles.img_box}>
        <img src="/public/face.png" className={styles.img} />
      </figure>
    </section>
  );
}

export default Homepage;

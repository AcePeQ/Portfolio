import styles from "./Homepage.module.css";
import Hero from "../../ui/Hero/Hero";
// import Planet from "../../features/Planet/Planet";

import { motion } from "motion/react";

function Homepage() {
  return (
    <section className={styles.homepage}>
      <Hero />
      {/* <Planet /> */}
      <motion.figure
        initial={{ opacity: 0, x: "50%" }}
        animate={{ opacity: 1, x: "0%" }}
        transition={{ duration: 2, type: "spring" }}
        className={styles.img_box}
      >
        <img
          src="/face.png"
          alt="photo of Maciej Nojszewski, illustration style, short dark/brown hair, blue eyes"
          className={styles.img}
        />
      </motion.figure>
    </section>
  );
}

export default Homepage;

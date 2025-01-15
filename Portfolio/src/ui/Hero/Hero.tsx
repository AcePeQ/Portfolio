import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <p className={styles.greeting}>Hi, I'm</p>
      <p className={styles.name}>Maciej Nojszewski</p>
      <p className={styles.profession}>I'm a Front-End Developer</p>
      <p className={styles.subtext}>
        I'm currently focused on expending my experince designing and developing
        modern websites
      </p>
    </div>
  );
}

export default Hero;

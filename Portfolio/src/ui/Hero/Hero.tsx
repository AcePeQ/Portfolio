import { useNavigate } from "react-router";
import Button from "../Button/Button";
import styles from "./Hero.module.css";

function Hero() {
  const navigate = useNavigate();

  function handleRedirectTo() {
    navigate("/aboutme");
  }

  return (
    <div className={styles.hero_wrapper}>
      <p className={styles.greeting}>Hi, I'm</p>
      <p className={styles.name}>Maciej Nojszewski</p>
      <p className={styles.profession}>
        I'm a <span className={styles.highlight}>Frontend Developer</span>
      </p>
      <p className={styles.subtext}>
        I'm currently focused on expending my experince designing and developing
        modern websites
      </p>

      <Button onClick={handleRedirectTo} type="primary-animated">
        About me
      </Button>
    </div>
  );
}

export default Hero;

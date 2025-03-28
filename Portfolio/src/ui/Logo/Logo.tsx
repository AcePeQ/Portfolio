import { Link } from "react-router";
import styles from "./Logo.module.css";

//Tutaj pomysl jest taki zeby zrobic cuba ktory bedzie sie obracal bialego a jak hover to filetowy
function Logo() {
  return (
    <div
      role="logo"
      aria-label="Logo of Maciej Nojszewski's portfolio"
      className={styles.logo}
    >
      <Link to="/" className={styles.logo_link}>
        MN
      </Link>
    </div>
  );
}

export default Logo;

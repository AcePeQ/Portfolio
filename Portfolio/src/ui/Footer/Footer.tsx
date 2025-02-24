import GoToTopButton from "../GoToTopButton/GoToTopButton";
import NavigationFooter from "../NavigationFooter/NavigationFooter";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.link_wrapper}>
        <p>Contact</p>
        <a className={styles.link} href="mailto: maciej.nojszewski22@gmail.com">
          maciej.nojszewski22@gmail.com
        </a>
      </div>
      <NavigationFooter />
      <GoToTopButton />
    </footer>
  );
}

export default Footer;

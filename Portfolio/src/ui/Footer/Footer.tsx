import GoToTopButton from "../GoToTopButton/GoToTopButton";
import Logo from "../Logo/Logo";
import NavigationFooter from "../NavigationFooter/NavigationFooter";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <NavigationFooter />
      <GoToTopButton />
    </footer>
  );
}

export default Footer;

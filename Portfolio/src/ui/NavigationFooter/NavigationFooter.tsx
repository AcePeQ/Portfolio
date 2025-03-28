import styles from "./NavigationFooter.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const linkItems = [
  { redirect: "/", link_name: "Github", icon: <FaGithub /> },
  { redirect: "/aboutme", link_name: "LinkedIn", icon: <FaLinkedin /> },
];

function NavigationFooter() {
  return (
    <nav role="secondary-navigation-socials" className={styles.navigation}>
      <ul className={styles.navigation_list}>
        {linkItems.map((navItem) => (
          <NavigationItem
            key={navItem.link_name}
            linkType="footer"
            navItem={navItem}
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavigationFooter;

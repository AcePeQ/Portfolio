import styles from "./Navigation.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";

import { HiHome } from "react-icons/hi2";
import { HiMiniUser } from "react-icons/hi2";
import { HiFolder } from "react-icons/hi2";
import { HiMail } from "react-icons/hi";

const linkItems = [
  { redirect: "/", link_name: "Home", icon: <HiHome /> },
  { redirect: "/aboutme", link_name: "About me", icon: <HiMiniUser /> },
  { redirect: "/projects", link_name: "Projects", icon: <HiFolder /> },
  { redirect: "/contact", link_name: "Contact", icon: <HiMail /> },
];

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation_list}>
        {linkItems.map((navItem) => (
          <NavigationItem navItem={navItem} />
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

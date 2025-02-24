import styles from "./Navigation.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";

import { HiHome } from "react-icons/hi2";
import { HiMiniUser } from "react-icons/hi2";
import { HiFolder } from "react-icons/hi2";

const linkItems = [
  { redirect: "/", link_name: "Home", icon: <HiHome /> },
  { redirect: "/aboutme", link_name: "About me", icon: <HiMiniUser /> },
  { redirect: "/projects", link_name: "Projects", icon: <HiFolder /> },
];

function Navigation() {
  return (
    <nav role="navigation-primary" className={styles.navigation}>
      <ul className={styles.navigation_list}>
        {linkItems.map((navItem) => (
          <NavigationItem key={navItem.link_name} navItem={navItem} />
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

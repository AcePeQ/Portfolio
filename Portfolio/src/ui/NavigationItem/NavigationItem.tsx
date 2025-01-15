import { NavLink } from "react-router";
import styles from "./NavigationItem.module.css";
import { NavItemType } from "../../utils/types";

function NavigationItem({ navItem }: { navItem: NavItemType }) {
  return (
    <li className={styles.navigation_item}>
      <NavLink className={styles.navigation_link} to={navItem.redirect}>
        {navItem.icon}
        {navItem.link_name}
      </NavLink>
    </li>
  );
}

export default NavigationItem;

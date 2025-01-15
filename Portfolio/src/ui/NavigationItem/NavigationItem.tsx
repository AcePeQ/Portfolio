import { Link, NavLink } from "react-router";
import styles from "./NavigationItem.module.css";
import { NavItemType } from "../../utils/types";

function NavigationItem({
  navItem,
  linkType,
}: {
  navItem: NavItemType;
  linkType?: string;
}) {
  if (linkType === "footer") {
    <li className={styles.navigation_item}>
      <Link className={styles.navigation_link} to={navItem.redirect}>
        {navItem.icon}
        {navItem.link_name}
      </Link>
    </li>;
  }

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

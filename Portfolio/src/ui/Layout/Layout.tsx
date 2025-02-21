import { Outlet, useLocation } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.css";

function Layout() {
  const location = useLocation();

  return (
    <div role="layout" aria-label="layout" className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>

      {location.pathname === "/" || <Footer />}
    </div>
  );
}

export default Layout;

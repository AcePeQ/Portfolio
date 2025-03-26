import { Outlet, useLocation } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.css";
import { useEffect } from "react";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [location.pathname]);

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>

      {location.pathname === "/" || <Footer />}
    </div>
  );
}

export default Layout;

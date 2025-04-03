import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <section className={styles.section_pagenotfound}>
      <img className={styles.img} src="/pagenotfound.svg" />
    </section>
  );
}

export default PageNotFound;

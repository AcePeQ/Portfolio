import styles from "./GitHubContribution.module.css";

function GitHubContribution() {
  return (
    <section className={styles.github_wrapper}>
      <h2 className={styles.title}>My Github Contribution</h2>
      <img
        src="https://ghchart.rshah.org/000000/acepeq"
        alt="AcePeQ's Github contribution chart"
      />
    </section>
  );
}

export default GitHubContribution;

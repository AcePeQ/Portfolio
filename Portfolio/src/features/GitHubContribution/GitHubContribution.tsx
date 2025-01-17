import styles from "./GitHubContribution.module.css";

function GitHubContribution() {
  return (
    <div className={styles.github_wrapper}>
      <h3 className={styles.title}>My Github Contribution</h3>
      <img
        src="https://ghchart.rshah.org/b22222/acepeq"
        alt="AcePeQ's Github chart"
      />
    </div>
  );
}

export default GitHubContribution;

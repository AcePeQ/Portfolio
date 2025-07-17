import styles from "./DownloadButton.module.css";

import { HiOutlineDownload } from "react-icons/hi";

function DownloadButton({ children }: { children: string }) {
  return (
    <a
      aria-label="resume download"
      className={styles.download_button}
      href="/Maciej_Nojszewski_CV.pdf"
      download
      target="_blank"
    >
      <HiOutlineDownload /> {children}
    </a>
  );
}

export default DownloadButton;

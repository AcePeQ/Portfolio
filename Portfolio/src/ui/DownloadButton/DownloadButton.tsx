import styles from "./DownloadButton.module.css";

import { HiOutlineDownload } from "react-icons/hi";

function DownloadButton({ children }: { children: string }) {
  return (
    <a className={styles.download_button} href="#" download target="_blank">
      <HiOutlineDownload /> {children}
    </a>
  );
}

export default DownloadButton;

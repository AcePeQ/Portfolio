import styles from "./TechnologyItem.module.css";

type TechnologyItemType = {
  label: string;
  src: string;
};

function TechnologyItem({ technology }: { technology: TechnologyItemType }) {
  return (
    <li className={styles.list_item} data-technology={`${technology.label}`}>
      <img
        className={styles.technology_icon}
        src={`/svgIcons/${technology.src}`}
        alt={`Icon of ${technology.label}`}
      />
    </li>
  );
}

export default TechnologyItem;

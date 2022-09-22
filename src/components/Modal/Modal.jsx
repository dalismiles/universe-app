import { memo } from "react";
import styles from "./index.module.scss";

const Modal = ({ data }) => {
  const { name, terrain, population, diameter, climate } = data;
  console.log(data);
  
  return (
    <div className={styles.Modal}>
      <h3>{name}</h3>
      <p className={styles.description}>{terrain}</p>
      <p className={styles.population}>{population}</p>
      <p className={styles.diameter}>{diameter}</p>
      <p className={styles.climate}>{climate}</p>
    </div>
  );
};

export default memo(Modal);

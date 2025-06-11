import styles from "./CardTecnologia.module.css";

export function CardTecnologia({ nome, logo }) {
  return (
    <div className={styles.card}>
      <div className={styles.logo}>{logo}</div>
      <h4>{nome}</h4>
    </div>
  );
}

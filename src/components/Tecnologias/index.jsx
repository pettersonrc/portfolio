import styles from "./Tecnologias.module.css";
import { todasTecnologias } from "../../services/servicos";
import { CardTecnologia } from "../CardTecnologia";

export function Tecnologias() {
  return (
    <section className={styles.containerTec}>
      <h3>Tecnologias</h3>
      <div className={styles.containerCards}>
        {todasTecnologias.map((tecnologia, index) => (
          <CardTecnologia
            key={index}
            nome={tecnologia.nome}
            logo={tecnologia.logo}
          />
        ))}
      </div>
    </section>
  );
}

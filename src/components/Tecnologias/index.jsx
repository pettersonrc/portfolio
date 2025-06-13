import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Tecnologias.module.css";
import { todasTecnologias } from "../../services/servicos";
import { CardTecnologia } from "../CardTecnologia";

export function Tecnologias() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className={styles.containerTec}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
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
    </motion.section>
  );
}

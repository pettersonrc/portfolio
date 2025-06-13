import { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";
import { projetos } from "../../data/data_projetos";
import { CardProjeto } from "../CardProjeto";
import styles from "./Projetos.module.css";

export function Projetos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8 });

  return (
    <Motion.section
      ref={ref}
      className={styles.containerProjetos}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className={styles.titulo}>Projetos</h3>
      <div className={styles.listaCards}>
        {projetos.map((projeto) => (
          <CardProjeto
            key={projeto.id}
            imagem={projeto.imagem}
            nome={projeto.nome}
            tecnologias={projeto.tecnologias}
            link={projeto.link}
            data={projeto.data}
          />
        ))}
      </div>
    </Motion.section>
  );
}


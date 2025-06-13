import { useState } from "react";
import styles from "./CardProjeto.module.css";
import { ModalProjeto } from "../ModalProjeto";

export function CardProjeto({ imagem, nome, descricao, tecnologias, link, data }) {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.card}>
          <img src={imagem} alt={`Projeto ${nome}`} className={styles.img} />
          <div className={styles.overlay}>
            <h4 className={styles.nome}>{nome}</h4>
            <div className={styles.icones}>
              {tecnologias.map((Icon, index) => (
                <Icon key={index} className={styles.icone} />
              ))}
            </div>
          </div>
        </a>

        <div className={styles.footer}>
          <span className={styles.data}>{data}</span>
          <button className={styles.botao} onClick={() => setMostrarModal(true)}>
            Ver mais
          </button>
        </div>
      </div>

      {mostrarModal && (
        <ModalProjeto
          nome={nome}
          descricao={descricao}
          imagem={imagem}
          tecnologias={tecnologias}
          link={link}
          onClose={() => setMostrarModal(false)}
        />
      )}
    </>
  );
}


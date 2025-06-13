import styles from "./ModalProjeto.module.css";

export function ModalProjeto({ nome, descricao, imagem, tecnologias, link, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.fechar} onClick={onClose}>&times;</button>
        <img src={imagem} alt={`Imagem do projeto ${nome}`} className={styles.imagem} />
        <h2 className={styles.titulo}>{nome}</h2>
        <p className={styles.descricao}>{descricao}</p>
        <div className={styles.tecnologias}>
          {tecnologias.map((Icon, index) => (
            <Icon key={index} className={styles.icone} />
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.botaoLink}
        >
          Acessar Projeto
        </a>
      </div>
    </div>
  );
}  

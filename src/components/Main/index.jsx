import token from "/token_2.png"
import styles from "./Main.module.css"
import 'animate.css'

export function Main() {
  return (
    <main className={styles.containerMain}>
        <div className={styles.containerTexto}>
          <h2 className={`animate__animated animate__fadeInDown ${styles.titulo}`}>
            Olá, eu sou o <strong className={styles.destaque}>Petterson!</strong>
          </h2>
          <span className={`animate__animated animate__fadeInDown animate__delay-1s ${styles.subtitulo}`}>
            Desenvolvedor Front-End | React.js
          </span>
        </div>
        <a href="https://github.com/pettersonrc" target="_blank" rel="noopener noreferrer">
          <img src={token} alt="Token Petterson" className={styles.img} />
        </a>
    </main>
  )
  
}

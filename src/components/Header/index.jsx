import { useState, useEffect } from "react"
import styles from "./Header.module.css"
import { Sun, Menu, X, Moon } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const [theme, setTheme] = useState(() => {

    const storageTheme = (localStorage.getItem("theme") || "dark")

    return storageTheme
  })

  const nextThemeIcon = {
    dark: <Sun />,
    light: <Moon />
  }

  function handleThemeChange(event) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark"
      return nextTheme
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <header className={styles.header}>
      <div className={styles.menuContainer}>
        <button className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {isMenuOpen && (
          <nav className={styles.mobileMenu}>
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#tecnologias">Tecnologias</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#soft-skills">Soft-Skills</a></li>
              <li><a href="#servicos">Serviços Contratáveis</a></li>
            </ul>
          </nav>
        )}
      </div>

      <h1 className={styles.titulo}>Portfólio</h1>

      <a 
        href="#"
        aria-label="Mudar Tema"
        title="Mudar Tema"
        onClick={handleThemeChange}
        className={styles.icon}>
        {nextThemeIcon[theme]}
      </a>
    </header>
  )
}

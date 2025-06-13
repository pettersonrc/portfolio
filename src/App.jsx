import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Sobre } from "./components/Sobre"
import {Tecnologias} from "./components/Tecnologias"
import { Projetos } from "./components/Projetos"

import 'animate.css'
import "./styles/global.css"
import "./styles/theme.css"

export default function App() {

  return (
    <>
      <Header/>
      <div className={"animate__animated animate__fadeInLeft"}>
        <Main/>
        <Sobre/>
      </div>
      <Tecnologias/>
      <Projetos/>
    </>
  )
}



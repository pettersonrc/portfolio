import { FaHtml5, FaCss3, FaReact, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiVitess } from "react-icons/si";

export const tecnologias = [
    { nome: "HTML", logo: <FaHtml5 /> },
    { nome: "CSS", logo: <FaCss3 /> },
    { nome: "JavaScript", logo: <IoLogoJavascript /> },
    { nome: "React", logo: <FaReact /> },
    { nome: "Git", logo: <FaGitAlt /> },
    { nome: "Tailwind CSS", logo: <RiTailwindCssFill /> },
    { nome: "TypeScript", logo: <SiTypescript /> },
    { nome: "Next JS", logo: <RiNextjsFill />},
    { nome: "Vite", logo: <SiVitess />}
];

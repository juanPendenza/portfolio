// SKILLS IMAGES
import htmlImg from "../assets/HTML5.png";
import cssImg from "../assets/CSS3.png";
import jsImg from "../assets/JavaScript.png";
import tsImg from "../assets/TypeScript.png";
import reactImg from "../assets/React.png";
import twImg from "../assets/Tailwind CSS.png";
import nodeImg from "../assets/Node.js.png";
import exImg from "../assets/Express.png";
import fbImg from "../assets/Firebase.png";
import sqliteImg from "../assets/SQLite.png";
import gitImg from "../assets/Git.png";
import ghImg from "../assets/GitHub (1).png";
import pmImg from "../assets/Postman.png";
import trelloImg from "../assets/Trello.png";
import vscImg from "../assets/Visual Studio Code (VS code).png";
import viteImg from "../assets/Vite.js.png";
/* import bashImg from "../assets/Bash.png";
import psImg from "../assets/Powershell.png"; */

// WORKS IMAGES
import pokemonImg from "../assets/pokemon-game-img.png";
import expenseTrackerImg from "../assets/expense-tracker-img.png";
import cajaRegistradoraImg from "../assets/caja-registradora-img.png";
import calculadoraImg from "../assets/calculadora.png";

// CONTEXTO
/* import { useLangContext } from "../components/LangContext";
const { lang } = useLangContext(); */

// SKILLS QUE VOY A USAR COMO PROP EN EL COMPONENTE SKILL
export const primarySkills = [
  { name: "Html", img: htmlImg },
  { name: "Css", img: cssImg },
  { name: "JavaScript", img: jsImg },
  { name: "React", img: reactImg },
  { name: "Node", img: nodeImg },
  { name: "Express", img: exImg },
  { name: "Firebase", img: fbImg },
  { name: "SQLite", img: sqliteImg },
  { name: "GitHub", img: ghImg },
];

export const frontSkills = [
  { name: "Html", img: htmlImg },
  { name: "Css", img: cssImg },
  { name: "JavaScript", img: jsImg },
  { name: "TypeScript", img: tsImg },
  { name: "React", img: reactImg },
  { name: "Tailwind", img: twImg },
  { name: "Vite", img: viteImg },
];

export const backSkills = [
  { name: "Node", img: nodeImg },
  { name: "Express", img: exImg },
  // { name: "Bash", img: bashImg },
  // { name: "Powershell", img: psImg },
];

export const dbSkills = [
  { name: "Firebase", img: fbImg },
  { name: "SQLite", img: sqliteImg },
];

export const otherSkills = [
  { name: "Git", img: gitImg },
  { name: "GitHub", img: ghImg },
  { name: "Postman", img: pmImg },
  { name: "Trello", img: trelloImg },
  { name: "VSC", img: vscImg },
];

// CARDS QUE VOY A USAR COMO PROP EN EL COMPONENTE CARD
export const primaryWorks = [
  {
    img: pokemonImg,
    titleEn: "Pókemon Fight!",
    titleEs: "Pelea de Pókemons!",
    descriptionEn:
      "This is a pokemon game using the poke API. You can play against the PC and you'll see who wins.",
    descriptionEs:
      "Este es un juego de pokemons hecho usando la poke API. Podés jugar contra la PC y ver quién gana.",
    technologies: ["react", "js", "tailwind"],
    codeUrl: "https://github.com/juanPendenza/pokemon-game.git",
    pageUrl: "https://juanPendenza.github.io/pokemon-game",
  },
  {
    img: expenseTrackerImg,
    titleEn: "Expense tracker",
    titleEs: "Seguidor de gastos",
    descriptionEn:
      "This is an income/expense tracker app, where you can manage your money.",
    descriptionEs:
      "Este es un seguidor de ingreses/gastos, donde podés administrar tu dinero.",
    technologies: ["react", "js", "tailwind"],
    codeUrl: "https://github.com/juanPendenza/expense-tracker.git",
    pageUrl: "https://juanPendenza.github.io/expense-tracker",
  },
  {
    img: cajaRegistradoraImg,
    titleEn: "Register box",
    titleEs: "Caja registradora",
    descriptionEn:
      "This is a register box that can be use to do counts, to storage done sells and close the box at the end of the day.",
    descriptionEs:
      "Esta es una caja registradora que podés usar para hacer cuentas, almacenar las ventas y cerrar la caja al final del día.",
    technologies: ["js", "html", "css"],
    codeUrl: "https://github.com/juanPendenza/caja-registradora.git",
    pageUrl: "https://juanPendenza.github.io/caja-registradora",
  },
];

export const scondaryWorks = [
  {
    img: calculadoraImg,
    titleEn: "Calculator",
    titleEs: "Calculadora",
    descriptionEn:
      "This is a simple calculator where you can do just one operation at the time.",
    descriptionEs:
      "Esta es una calculadora simple hecha sin librerías, donde podés hacer una operación a la vez.",
    technologies: ["js", "html", "css"],
    codeUrl: "https://github.com/juanPendenza/calculadora.git",
    pageUrl: "https://juanPendenza.github.io/calculadora",
  },
  /*
  {
    img: "",
    title: "",
    description: "",
    technologies: "",
    codeUrl: "",
    pageUrl: "",
  },
  
  {
    img: "",
    title: "",
    description: "",
    technologies: "",
    codeUrl: "",
    pageUrl: "",
  },
  {
    img: "",
    title: "",
    description: "",
    technologies: "",
    codeUrl: "",
    pageUrl: "",
  },
  {
    img: "",
    title: "",
    description: "",
    technologies: "",
    codeUrl: "",
    pageUrl: "",
  },
  {
    img: "",
    title: "",
    description: "",
    technologies: "",
    codeUrl: "",
    pageUrl: "",
  }, */
];
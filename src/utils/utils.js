// SKILLS IMAGES
import htmlImg from "../assets/HTML5.png";
import cssImg from "../assets/CSS3.png";
import jsImg from "../assets/JavaScript.png";
import tsImg from "../assets/TypeScript.png";
import reactImg from "../assets/React.png";
import twImg from "../assets/Tailwind.png";
import nodeImg from "../assets/Node.png";
import exImg from "../assets/Express.png";
import fbImg from "../assets/Firebase.png";
import sqliteImg from "../assets/SQLite.png";
import gitImg from "../assets/Git.png";
import ghImg from "../assets/GitHub.png";
import pmImg from "../assets/Postman.png";
import trelloImg from "../assets/Trello.png";
import vscImg from "../assets/vsc.png";
import viteImg from "../assets/Vite.png";
import mdbImg from "../assets/MongoDB.png";

// WORKS IMAGES
import pokemonImg from "../assets/pokemon-game-img.png";
import expenseTrackerImg from "../assets/expense-tracker-img.png";
import cajaRegistradoraImg from "../assets/caja-registradora-img.png";
import calculadoraImg from "../assets/calculadora.png";
import portfolioImg from "../assets/portfolio-img.png";
import quoteGeneratorImg from "../assets/quote-generator-img.png";

// SKILLS QUE VOY A USAR COMO PROP EN EL COMPONENTE SKILL
export const primarySkills = [
  { name: "Html", img: htmlImg },
  { name: "Css", img: cssImg },
  { name: "JavaScript", img: jsImg },
  { name: "React", img: reactImg },
  { name: "Node", img: nodeImg },
  { name: "Express", img: exImg },
  { name: "MongoDB", img: mdbImg },
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
];

export const dbSkills = [
  { name: "SQLite", img: sqliteImg },
  { name: "MongoDB", img: mdbImg },
  { name: "Firebase", img: fbImg },
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
      "Este es un seguidor de ingresos/gastos, donde podés administrar tu dinero.",
    technologies: ["react", "js", "tailwind"],
    codeUrl: "https://github.com/juanPendenza/expense-tracker.git",
    pageUrl: "https://juanPendenza.github.io/expense-tracker",
  },
  {
    img: quoteGeneratorImg,
    titleEn: "Quote generator",
    titleEs: "Generador de frases",
    descriptionEn:
      "This is a random quote generator using the quote's ninja API.",
    descriptionEs:
      "Este es un generador de frases al azar usando la API de frases de ninja.",
    technologies: ["react", "js", "tailwind"],
    codeUrl: "https://github.com/juanPendenza/quote-generator.git",
    pageUrl: "https://juanPendenza.github.io/quote-generator",
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
  {
    img: portfolioImg,
    titleEn: "Portfolio",
    titleEs: "Portafolio",
    descriptionEn:
      "I created this portfolio you´re looking at and deployed it with GitHub Actions.",
    descriptionEs:
      "Yo creé este portafolio que estás viendo y lo desplegué con GitHub Actions.",
    technologies: ["react", "js", "tailwind"],
    codeUrl: "https://github.com/juanPendenza/portfolio.git",
    pageUrl: "https://juanPendenza.github.io/portfolio",
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
  {
    titleEn: "Herramientapp client",
    titleEs: "Herramientapp cliente",
    descriptionEn:
      "I developed the tool registration's client for a tools administration application, where the tool's data is loaded, validated and sent to the server. The page isn't mine and is not deployed, it is for internal use.",
    descriptionEs:
      "Desarrollé el cliente del alta de herramientas de una aplicación de administración de un pañol, donde se cargan los datos de la herramienta, se validan y se envian al servidor. La página no es mia y no está desplegada, es de uso interno.",
    technologies: ["react", "js", "tailwind"],
  },
  {
    titleEn: "Herramientapp server",
    titleEs: "Herramientapp servidor",
    descriptionEn:
      "I developed the tool registration's server for a tools administration application, where the tool's data that is entered in the client are received, validated and loaded into the database.The page is for internal use and is not deployed.",
    descriptionEs:
      "Desarrollé el servidor del alta de herramientas de una aplicación de administración de un pañol, donde llegan los datos de la herramienta desde el cliente, se validan y luego se cargan en la base de datos. La página es de uso interno y no está desplegada.",
    technologies: ["js", "node", "express", "sqlite"],
  },
];

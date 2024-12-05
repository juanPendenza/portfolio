import { Link } from "react-router-dom";
import Card from "./Card";
import { useLangContext } from "./LangContext";

// ESTE COMPONENTE MAQUETA EL CONTENEDOR QUE MUESTRA LAS CARDS DE LOS TRABAJOS
function WorksLayout({ primaryWorks, secondaryWorks }) {
  // TRAIGO EL LENGUAJE DEL CONTEXTO
  const { lang } = useLangContext();
  return (
    <div
      className={`hero transition-all duration-300 border-b ${
        location.pathname !== "/works"
          ? "min-h-screen lg:h-screen border-gray-300 dark:border-[#383838]"
          : "min-h-screen border-none lg:pt-24"
      }`}
    >
      <div className="hero-content text-center py-20 lg:py-0">
        <div className="flex flex-col items-center gap-10 lg:gap-20">
          <h1 className="text-5xl font-poppins font-bold transition-all duration-300 text-black dark:text-white text-center animate__animated animate__fadeInDown">
            {lang === "en" ? "Works" : "Trabajos"}
          </h1>
          {/* CREÉ DOS DIVS DE CARDS */}
          {/* ESTE PRIMERO CONTIENE LOS TRES TRABAJOS MÁS IMPORTANTES Y SE MUESTRA SIEMPRE */}
          <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-10 lg:gap-20 animate__animated animate__fadeInLeft">
            {primaryWorks.map((w, index) => (
              <div className="h-96" key={index}>
                <Card work={w} />
              </div>
            ))}
          </div>
          {/* ESTE SEGUNDO SE MUESTRA SOLAMENTE EN LA PAGE WORKS, Y CONTIENE A TODOS LOS DEMÁS TRABAJOS */}
          <div
            className={`flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-10 lg:gap-20 lg:pb-40 animate__animated animate__fadeInRight ${
              location.pathname !== "/works" ? "hidden" : ""
            }`}
          >
            {secondaryWorks.map((w, index) => (
              <div className="h-96" key={index}>
                <Card work={w} />
              </div>
            ))}
          </div>
          {/* EL BOTÓN DE VER MÁS SOLAMENTE SE MUESTRA EN LA HOME, Y NO EN WORKS */}
          <div className={`${location.pathname !== "/works" ? "" : "hidden"}`}>
            <Link to={"/works"}>
              <a className="link link-primary underline lg:no-underline hover:underline font-poppins transition-all duration-200">
                {lang === "en"
                  ? "click to see all my works"
                  : "click para ver todos mis trabajos"}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorksLayout;

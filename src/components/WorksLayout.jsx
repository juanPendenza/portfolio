import { Link } from "react-router-dom";
import Card from "./Card";

// ESTE COMPONENTE MAQUETA EL CONTENEDOR QUE MUESTRA LAS CARDS DE LOS TRABAJOS
function WorksLayout(card) {
  return (
    <div
      className={`hero min-h-screen border-b ${
        location.pathname !== "/works"
          ? "border-gray-300 dark:border-[#383838]"
          : "border-none lg:pt-24"
      }`}
    >
      <div className="hero-content text-center py-20 lg:py-0">
        <div className="flex flex-col items-center gap-12 lg:gap-20">
          <h1 className="text-5xl font-poppins font-bold text-black dark:text-white text-center">
            Works
          </h1>
          {/* CREÉ DOS DIVS DE CARDS */}
          {/* ESTE PRIMERO CONTIENE LOS TRES TRABAJOS MÁS IMPORTANTES Y SE MUESTRA SIEMPRE */}
          <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-10 lg:gap-20 mb-5">
            <Card />
            <Card />
            <Card />
          </div>
          {/* ESTE SEGUNDO SE MUESTRA SOLAMENTE EN LA PAGE WORKS, Y CONTIENE A TODOS LOS DEMÁS TRABAJOS */}
          <div
            className={`flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-10 lg:gap-20 lg:pb-40 ${
              location.pathname !== "/works" ? "hidden" : ""
            }`}
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          {/* EL BOTÓN DE VER MÁS SOLAMENTE SE MUESTRA EN LA HOME, Y NO EN WORKS */}
          <div className={`${location.pathname !== "/works" ? "" : "hidden"}`}>
            <Link to={"/works"}>
              <a className="link link-primary no-underline hover:underline font-poppins transition-all duration-200">
                Ver más
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorksLayout;

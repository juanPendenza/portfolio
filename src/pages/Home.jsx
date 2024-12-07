import Navbar from "../components/Navbar";
import WorksLayout from "../components/WorksLayout";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import "animate.css";
import { useEffect, useState } from "react";
import { primarySkills, primaryWorks, scondaryWorks } from "./utils/utils.js";
import { Link } from "react-router-dom";
import homeImg from "../assets/OIG4.png";
import Skill from "../components/Skill";
import { useLangContext } from "../components/LangContext.jsx";

// PÁGINA PRINCIPAL DEL PORTFOLIO
// SE MUESTRAN TODAS LAS OTRAS PAGES TAMBIÉN
function Home() {
  // TRAIGO EL LENGUAJE DEL CONTEXTO
  const { lang } = useLangContext();

  // CUANDO VOY A LA /home HACE UN SCROLL AL INICIO
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-full w-full transition-all duration-300 bg-white dark:bg-[#101010]">
      {/* HEADER */}
      <Navbar />

      {/* SECCIÓN PRESENTACIÓN */}
      <div className="hero h-min-screen lg:h-screen transition-all duration-300 border-b border-gray-300 dark:border-[#383838]">
        <div className="hero-content w-full pt-24 lg:pt-22 pb-16 lg:pb-40 flex-col gap-20 lg:gap-28">
          <div className="w-full flex flex-col lg:flex-row items-center lg:justify-center gap-10">
            <div
              className={`flex flex-col items-center lg:items-start ${
                lang === "en" ? "w-4/5" : "w-11/12"
              } lg:w-1/2 animate__animated animate__fadeInLeft`}
            >
              {/* TITULO HOME */}
              <h1 className="text-5xl font-poppins font-bold transition-all duration-300 text-black dark:text-white text-center">
                {lang === "en" ? "Hello, I'm Juanpi!👋🏽" : "Hola, soy Juanpi!👋🏽"}
              </h1>
              {/* PRESENTACION */}
              <p className="pt-6 pb-3 font-poppins text-center lg:text-start w-full lg:w-5/6 transition-all duration-300 text-[#808080]">
                {lang === "en"
                  ? "My name is Juan Pablo Pendenza. I'm a fullstack developer based in Buenos Aires, Argentina.📍"
                  : "Mi nombre es Juan Pablo Pendenza. Soy un desarrollador fullstack de Buenos Aires, Argentina.📍"}
              </p>
              {/* CV */}
              {/* <a
                onClick={() => {
                  const resume = document.createElement("a"); // Accede al enlace dinámico
                  resume.href = "/public/CV.pdf"; // Ruta del archivo en la carpeta public
                  resume.download = "resume.pdf"; // Nombre para la descarga
                  document.body.appendChild(resume); // Añade el enlace al DOM temporalmente
                  resume.click(); // Activa el clic para descargar
                  document.body.removeChild(resume); // Remueve el enlace del DOM después del clic
                }}
                className="w-3/4 flex justify-center items-end gap-1 lg:justify-start animate__animated animate__bounce animate__delay-2s text-[#808080] hover:text-black dark:hover:text-white transition-all duration-200 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
                <span className="font-poppins">
                  {lang === "en" ? "resume" : "cv"}
                </span>
              </a> */}
            </div>
            {/* IMAGEN */}
            <div className="w-72 lg:w-80 animate__animated animate__fadeInRight">
              <img
                src={homeImg}
                className="w-full animate-randomMove"
                style={{ filter: `drop-shadow(-5px 5px 10px #70ffaf)` }}
              />
            </div>
          </div>
          {/* TITULO SKILLS */}
          <div className="w-full flex flex-col items-center gap-10 lg:gap-14 col-span-2 animate__animated animate__fadeInUp">
            <h2 className="w-3/4 font-poppins transition-all duration-300 text-black dark:text-white text-center font-semibold text-lg border-b border-gray-300 dark:border-[#383838] pb-4">
              {lang === "en" ? "Skills" : "Habilidades"}
            </h2>
            {/* SKILLS */}
            <div className="w-full flex flex-wrap justify-center gap-x-14 lg:gap-x-20 gap-y-10">
              {primarySkills.map((s, index) => (
                <div key={index}>
                  <Skill skill={s} />
                </div>
              ))}
            </div>
            <div className={`${location.hash !== "#/skills" ? "" : "hidden"}`}>
              <Link to={"/skills"}>
                <a className="link link-primary underline lg:no-underline hover:underline font-poppins transition-all duration-200">
                  {lang === "en"
                    ? "click to see all my skills"
                    : "click para ver todas mis hailidades"}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN TRABAJOS */}
      <WorksLayout primaryWorks={primaryWorks} secondaryWorks={scondaryWorks} />

      {/* SECCIÓN CONTACTO */}
      <ContactForm />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;

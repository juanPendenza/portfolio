import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SkillsLayout from "../components/SkillsLayout";
import { backSkills, dbSkills, frontSkills, otherSkills } from "./utils/utils";
import { useLangContext } from "../components/LangContext";

// PAGINA QUE MUESTRA TODAS MIS SKILLS Y CERTIFICACIONES
function Skills() {
  // TRAIGO EL LENGUAJE DEL CONTEXTO
  const { lang } = useLangContext();

  // CUANDO VOY A /work HACE UN SCROLL AL INICIO
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-full w-full transition-all duration-300 bg-white dark:bg-[#101010]">
      {/* NAVBAR */}
      <Navbar />

      {/* SECCION SKILLS */}
      <div className="hero min-h-screen transition-all duration-300 border-none">
        <div className="hero-content text-center py-20 lg:pt-24 lg:pb-40">
          <div className="flex flex-col items-center gap-10 lg:gap-20">
            <h1 className="text-5xl font-poppins font-bold transition-all duration-300 text-black dark:text-white text-center animate__animated animate__fadeInDown">
              {lang === "en" ? "Skills" : "Habilidades"}
            </h1>
            <div className="w-full flex flex-col gap-20 p-5 animate__animated animate__fadeInLeft">
              <div className="w-full flex flex-col gap-8 items-center lg:items-start pb-20 border-b border-gray-300 dark:border-[#383838]">
                <span className="font-poppins text-xl text-black dark:text-white underline-offset-3 transition-all duration-300">
                  {"front-end".toUpperCase()}
                </span>
                <SkillsLayout typeSkills={frontSkills} />
              </div>
              <div className="w-full flex flex-col gap-8 items-center lg:items-start pb-20 border-b border-gray-300 dark:border-[#383838]">
                <span className="font-poppins text-xl text-black dark:text-white underline-offset-3 transition-all duration-300">
                  {"back-end".toUpperCase()}
                </span>
                <SkillsLayout typeSkills={backSkills} />
              </div>
              <div className="w-full flex flex-col gap-8 items-center lg:items-start pb-20 border-b border-gray-300 dark:border-[#383838]">
                <span className="font-poppins text-xl text-black dark:text-white underline-offset-3 transition-all duration-300">
                  {lang === "en"
                    ? "database".toUpperCase()
                    : "base de datos".toUpperCase()}
                </span>
                <SkillsLayout typeSkills={dbSkills} />
              </div>
              <div className="w-full flex flex-col gap-8 items-center lg:items-start pb-20">
                <span className="font-poppins text-xl text-black dark:text-white underline-offset-3 transition-all duration-300">
                  {lang === "en"
                    ? "other".toUpperCase()
                    : "otras".toUpperCase()}
                </span>
                <SkillsLayout typeSkills={otherSkills} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Skills;

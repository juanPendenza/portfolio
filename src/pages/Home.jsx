import Navbar from "../components/Navbar";
import WorksLayout from "../components/WorksLayout";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import "animate.css";
import Skill from "../components/Skill";
import { useEffect } from "react";

// PÁGINA PRINCIPAL DEL PORTFOLIO
// SE MUESTRAN TODAS LAS OTRAS PAGES TAMBIÉN
function Home() {
  // CUANDO VOY A LA /home HACE UN SCROLL AL INICIO
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="h-full w-full bg-white dark:bg-[#080808]">
        {/* HEADER */}
        <Navbar />

        {/* SECCIÓN PRESENTACIÓN */}
        <div className="hero min-h-screen border-b border-gray-300 dark:border-[#383838]">
          <div className="hero-content w-full pt-24 lg:pt-22 pb-16 lg:pb-40 flex-col gap-14 lg:gap-40">
            <div className="w-full flex flex-col lg:flex-row items-center lg:justify-center gap-10">
              <div className="flex flex-col items-center lg:items-start w-4/5 lg:w-1/2">
                <h1 className="text-5xl font-poppins font-bold text-black dark:text-white text-center">
                  Hello, I'm Juanpi!👋🏽
                </h1>
                <p className="pt-6 pb-3 font-poppins text-center lg:text-start w-full lg:w-5/6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  molestiae, soluta est repellat itaque veniam! Odio cumque
                  optio necessitatibus, quas aliquam quos ducimus aliquid animi
                  quis doloribus ad nulla error.
                  {/* My name is Juan Pablo Pendenza. I'm a fullstack developer
                  based in Buenos Aires, Argentina.📍 */}
                </p>
                <a className="w-3/4 flex justify-center lg:justify-start animate__animated animate__bounceIn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6 transition-all duration-200 hover:text-black dark:hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                  </svg>
                </a>
              </div>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                className="rounded-lg shadow-xl shadow-[#383838]"
              />
            </div>
            <div className="w-full flex flex-col items-center gap-5 col-span-2">
              <h2 className="w-3/4 font-poppins text-black dark:text-white text-center font-semibold text-lg border-b border-gray-300 dark:border-[#383838] pb-4">
                Skills
              </h2>
              <div className="w-3/4 flex flex-wrap justify-center gap-x-12 gap-y-8">
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN TRABAJOS */}
        <WorksLayout />

        {/* SECCIÓN CONTACTO */}
        <ContactForm />

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
}

export default Home;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import spainImg from "../assets/spain.png";
import usaImg from "../assets/usa.png";
import { useLangContext } from "./LangContext";

// NAV DE LAS PAGES
function Navbar() {
  // HAMBUERGUESA QUE ESTA DEL LADO DERECHO DEL NAV, EN LA PARTE MOBILE
  const [burger, setBurger] = useState(false);

  // TRAIGO EL CONTEXTO
  const { lang, changeLang } = useLangContext();

  // TEMA DE LA PÁGINA
  const [darkMode, setDarkMode] = useState(() => {
    return sessionStorage.getItem("darkMode")
      ? JSON.parse(sessionStorage.getItem("darkMode"))
      : false;
  });

  // ESTADO PARA SABER SI ESTA COPIADO O NO EL MAIL
  const [copied, setIsCopied] = useState(false);

  // RUTA DE CADA UNA DE LAS PAGES
  const routes = [
    { path: "/", label: `${lang === "en" ? "Home" : "Inicio"}` },
    { path: "/skills", label: `${lang === "en" ? "Skills" : "Habilidades"}` },
    { path: "/works", label: `${lang === "en" ? "Works" : "Trabajos"}` },
    { path: "/contact", label: `${lang === "en" ? "Contact" : "Contacto"}` },
  ];

  // FUNCIÓN QUE MANJEA EL BURGER
  function handleBruger() {
    setBurger(!burger);
  }

  // FUNCIÓN QUE CAMBIA EL TEMA DE LA PÁGINA
  function changeTheme() {
    setDarkMode(!darkMode);
  }

  // COPIA EL MAIL AL PORTAPAPELES
  async function copyMail() {
    try {
      await navigator.clipboard.writeText("juan.pablo.pendenza.22@gmail.com");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Error: " + err);
    }
  }

  // SE EJECUTA CADA VEZ QUE CAMBIA EL ESTADO DE darkMode
  useEffect(() => {
    // guardo en el sessionStorage el valor del state darkMode
    sessionStorage.setItem("darkMode", JSON.stringify(darkMode));
    // si el tema oscuro está activado agrega la clase dark a la raiz
    // si el tema oscuro está desactivado borra la clase dark de la raiz
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <nav
      // este ternario es para que en la page NotFound se mantenga el modo oscuro pero no se muestre el nav
      className={
        location.hash != "" &&
        location.hash != "#" &&
        location.hash != "#/" &&
        location.hash != "#/skills" &&
        location.hash != "#/works" &&
        location.hash != "#/contact"
          ? "hidden"
          : "sticky top-0 z-50 h-16 w-full transition-all duration-300 border-b bg-white dark:bg-[#101010] lg:bg-transparent dark:lg:bg-transparent border-gray-300 dark:border-[#383838] lg:border-none flex flex-col items-center p-2 lg:h-24 lg:p-4 lg:overflow-x-hidden"
      }
    >
      <div className="h-full w-screen flex justify-between items-center px-2">
        <Link to={"/"} className="lg:w-1/3 lg:pl-10">
          <Logo />
        </Link>
        {/* ESTILOS DESKTOP */}
        <div className="hidden bg-gray-100 dark:bg-[#232323] lg:shadow-lg dark:lg:shadow-[#383838] lg:flex lg:items-center lg:justify-center lg:rounded-full lg:p-2">
          <ul className="flex lg:gap-4 ">
            {/* MAPEO EL ARRAY DE RUTAS PARA MOSTRARLAS EN EL NAV DESKTOP */}
            {routes.map(({ path, label }, index) => (
              <button key={index}>
                <li>
                  <Link
                    to={path}
                    className={`font-poppins text-sm font-semibold transition-all duration-200 hover:text-black dark:hover:text-white p-1 ${
                      location.hash == "#" + path
                        ? "text-black dark:text-white bg-gray-200 dark:bg-[#4f4f4f] rounded-full"
                        : "text-[#808080]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              </button>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex lg:justify-end lg:items-center lg:gap-4 lg:w-1/3 lg:pr-10">
          {/* GITHUB */}
          <a href="https://github.com/juanPendenza" target="_blanck">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-github css-svt5ra"
              className="transition-all duration-200 dark:text-[#808080] hover:text-black dark:hover:text-white"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/juan-pablo-pendenza-241148291/"
            target="_blanck"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-linkedin css-svt5ra"
              className="transition-all duration-200 dark:text-[#808080] hover:text-black dark:hover:text-white"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          {/* MAIL */}
          <button
            className="tooltip tooltip-bottom"
            data-tip="copy"
            onClick={copyMail}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-6 transition-all duration-200 dark:text-[#808080] hover:text-black dark:hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </button>
          {/* MODO CLARO/OSCURO DESKTOP */}
          <div className="flex justify-center gap-3 p-2 bg-gray-100 dark:bg-[#232323] rounded-full">
            <div className="flex justify-start gap-4">
              <button onClick={changeTheme}>
                {darkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="orange"
                    className="size-6 fill-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                )}
              </button>
              {/* LENGUAJES DESKTOP */}
              <button onClick={changeLang}>
                {lang === "en" ? (
                  <img className="size-6" src={spainImg} alt="spain-flag" />
                ) : (
                  <img className="size-6" src={usaImg} alt="usa-flag" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* ESTILOS MOBILE */}
        <button
          /* CUANDO HAGO CLICK AL BURGER SE EJECUTA LA FUNCIÓN QUE LO MANEJA Y SETEA SU VALOR */
          onClick={handleBruger}
          className="flex justify-center items-center mr-2 lg:hidden"
        >
          {burger ? ( // SI EL BURGER ESTÁ CERRADO, EL ICONO APARECE EN EL DIV QUE ESTÁ DENTRO DEL NAV Y NO DENTRO DE LA LISTA
            false
          ) : darkMode ? ( // este ternario es para cambiar el color del burger por si estoy en modo claro u oscuro
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="black"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      {/* CREÉ UN DIV QUE OCUPE TODA LA PANTALLA Y CONTENGA A LA LISTA DEL BURGER CUANDO ESTE ESTÁ ABIERTO (true)
            PERO CUANDO ESTÁ CERRADO (false) EL DIV ESTE NO APARECE, PORQUE SINO NO ME DEJA CLICKEAR EL BURGER QUE
            TENGO EN EL NAV, YA QUE ME LO TAPA */}
      <div
        className={
          burger
            ? "h-screen w-screen absolute top-0 right-0 left-0 bottom-0 bg-black/50 backdrop-blur-md lg:hidden "
            : "hidden"
        }
      >
        <ul
          className={
            burger
              ? `mt-5 mr-5 p-3 absolute top-0 right-0 flex flex-col items-start justify-between gap-4 bg-white dark:bg-[#383838] rounded-lg lg:hidden`
              : "hidden"
          }
        >
          <button
            onClick={handleBruger}
            className="w-full flex justify-end items-center mr-2 lg:hidden"
          >
            {burger ? ( // SI EL BURGER ESTÁ ABIERTO, EL ICONO YA NO APARECE EN EL DIV DEL NAV Y APARECE DENTRO DE LA LISTA
              darkMode ? ( // este ternario es para cambiar el color del burger por si estoy en modo claro u oscuro
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="black"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )
            ) : (
              false
            )}
          </button>
          <div className="flex flex-col w-60 justify-evenly items-start gap-4 pb-4 border-b border-gray-300 dark:border-[#808080]">
            {/* MAPEO EL ARRAY DE RUTAS PARA MOSTRARLAS EN LA LISTA MOBILE */}
            {routes.map(({ path, label }, index) => (
              <button key={index} onClick={handleBruger}>
                <li>
                  <Link
                    to={path}
                    className="font-poppins text-md font-semibold text-black dark:text-white"
                  >
                    {label}
                  </Link>
                </li>
              </button>
            ))}
          </div>
          <div className="w-full flex justify-start gap-4">
            {/* MODO CLARO/OSCURO MOBILE*/}
            <div className="flex gap-6">
              <div className=" flex flex-col items-start gap-1">
                <span className="text-gray-500 dark:text-gray-300 font-poppins text-xs">
                  {lang === "en" ? "Theme" : "Tema"}
                </span>
                {/* SI MODO OSCURO ES TRUE MUESTRO EL SOL Y SI ES FALSE MUESTRO LA LUNA 
                    Y AL HACERLE CLICK TAMBIÉN SE CIERRA EL BURGER */}
                <button
                  onClick={() => {
                    changeTheme();
                    handleBruger();
                  }}
                >
                  {darkMode ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="orange"
                      className="size-6 fill-yellow-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="black"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {/* LENGUAJES MOBILE */}
              <div className="flex flex-col items-start justify-start gap-1">
                <span className="text-gray-500 dark:text-gray-300 font-poppins text-xs">
                  {lang === "en" ? "Lang" : "Idioma"}
                </span>
                <button
                  onClick={() => {
                    changeLang();
                    handleBruger();
                  }}
                >
                  {lang === "en" ? (
                    <img className="size-6" src={spainImg} alt="spain-flag" />
                  ) : (
                    <img className="size-6" src={usaImg} alt="usa-flag" />
                  )}
                </button>
              </div>
              {/* CONTACTOS MOBILE */}
              <div className="flex flex-col items-start justify-start gap-1">
                <span className="text-gray-500 dark:text-gray-300 font-poppins text-xs">
                  {lang === "en" ? "Contact" : "Contacto"}
                </span>
                <div className="flex items-center gap-4">
                  {/* github */}
                  <a href="https://github.com/juanPendenza" target="_blanck">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-github css-svt5ra"
                      className="size-5 transition-all duration-200 dark:text-[#808080] hover:text-black dark:hover:text-white"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                  {/* linkedin */}
                  <a
                    href="https://www.linkedin.com/in/juan-pablo-pendenza-241148291/"
                    target="_blanck"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-linkedin css-svt5ra"
                      className="size-5 transition-all duration-200 dark:text-[#808080] hover:text-black dark:hover:text-white"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  {/* mail */}
                  <div onClick={copyMail}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="size-5 transition-all duration-200 dark:text-[#808080] hover:text-black dark:hover:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

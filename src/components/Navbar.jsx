import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  // ES LA HAMBUERGUESA QUE ESTA DEL LADO DERECHO DEL NAV, EN LA PARTE MOBILE
  const [burger, setBurger] = useState(false);

  // FUNCIÓN QUE MANJEA EL BURGER
  function handleBruger() {
    if (burger == false) {
      setBurger(true);
    } else {
      setBurger(false);
    }
  }

  // RUTA DE CADA UNA DE LAS PAGES
  const routes = [
    { path: "/", label: "Home" },
    { path: "/skills", label: "Skills" },
    { path: "/work", label: "Work" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 h-16 w-full flex flex-col items-center shadow-lg bg-white p-2 lg:h-20 ">
        <div className="h-full w-screen flex justify-between items-center">
          <Link className="ml-3 lg:ml-5" to={"/"}>
            <Logo />
          </Link>
          {/* ESTILOS DESKTOP */}
          <ul className="hidden lg:h-full lg:w-1/3 lg:flex lg:items-center lg:justify-evenly">
            {/* MAPEO EL ARRAY DE RUTAS PARA MOSTRARLAS EN EL NAV DESKTOP */}
            {routes.map(({ path, label }, index) => (
              <button key={index} onClick={handleBruger} className="w-16">
                <li>
                  <Link
                    to={path}
                    className="font-poppins text-md font-semibold text-gray-600 hover:text-[#00BFFF]"
                  >
                    {label}
                  </Link>
                </li>
              </button>
            ))}
          </ul>
          {/* ESTILOS MOBILE */}
          <button
            /* CUANDO HAGO CLICK AL BURGER SE EJECUTA LA FUNCIÓN QUE LO MANEJA Y SETEA SU VALOR */
            onClick={handleBruger}
            className="flex justify-center items-center mr-2 lg:hidden"
          >
            {burger ? ( // SI EL BURGER ESTÁ CERRADO, EL ICONO APARECE EN EL DIV QUE ESTÁ DENTRRO DEL NAV Y NO DENTRO DE LA LISTA
              false
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="gray"
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
              ? "h-screen w-screen absolute top-0 right-0 left-0 bottom-0 bg-black/80 lg:hidden "
              : "hidden"
          }
        >
          <ul
            className={
              burger
                ? `mt-5 mr-5 p-3 absolute top-0 right-0 flex flex-col items-start justify-between gap-4 bg-white rounded-lg lg:hidden`
                : "hidden"
            }
          >
            <button
              onClick={handleBruger}
              className="w-full flex justify-end items-center mr-2 lg:hidden"
            >
              {burger ? ( // SI EL BURGER ESTÁ ABIERTO, EL ICONO YA NO APARECE EN EL DIV DEL NAV Y APARECE DENTRO DE LA LISTA
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="gray"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                false
              )}
            </button>
            <div className="flex flex-col w-60 justify-evenly items-start gap-4">
              {/* MAPEO EL ARRAY DE RUTAS PARA MOSTRARLAS EN LA LISTA MOBILE */}
              {routes.map(({ path, label }, index) => (
                <button key={index} onClick={handleBruger}>
                  <li>
                    <Link
                      to={path}
                      className="font-poppins text-md font-semibold text-gray-600"
                    >
                      {label}
                    </Link>
                  </li>
                </button>
              ))}
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

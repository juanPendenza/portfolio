import { useState } from "react";
import { Link } from "react-router-dom";

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
      <nav className="h-16 w-full border p-2">
        <div className="h-full w-full flex justify-between items-center">
          <Link to={"/"}>
            <img src="" alt="mi-logo" className="w-10 h-10 border" />
          </Link>
          {/* ESTILOS DESKTOP */}
          <ul className="hidden lg:h-full lg:w-1/3 lg:flex lg:items-center lg:justify-evenly">
            {routes.map(({ path, label }, index) => (
              <button key={index} onClick={handleBruger} className="w-16">
                <li>
                  <Link
                    to={path}
                    className="text-lg text-white hover:text-[#00BFFF]"
                  >
                    {label}
                  </Link>
                </li>
              </button>
            ))}
          </ul>
          {/* ESTILOS MOBILE */}
          <button
            /* CUANDO HAGO CLICK AL BURGER SE EJECUTA LA FUNCIÓN QUE LO MANEJA */
            onClick={handleBruger}
            className="flex justify-center items-center lg:hidden"
          >
            {burger ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
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
                strokeWidth={1.5}
                stroke="white"
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
      </nav>
      <ul
        className={
          burger
            ? `h-96 flex flex-col items-center justify-evenly mt-24 lg:hidden`
            : "hidden"
        }
      >
        {routes.map(({ path, label }, index) => (
          <button key={index} onClick={handleBruger}>
            <li>
              <Link to={path} className="text-2xl text-white">
                {label}
              </Link>
            </li>
          </button>
        ))}
      </ul>
    </>
  );
}

export default Navbar;

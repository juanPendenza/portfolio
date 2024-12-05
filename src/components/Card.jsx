// COMPONENTE CARD QUE MUESTRA CADA UNO DE LOS TRABAJOS

import { useLangContext } from "./LangContext";

// VOY A TRABAJAR EN BASE A LAS PROPS
function Card({ work }) {
  // TRAIGO EL LENG DEL CONTEXTO
  const { lang } = useLangContext();

  return (
    <div className="h-full w-72 lg:w-80">
      <div className="card h-full w-full bg-white dark:bg-[#232323] shadow-lg shadow-[#808080]/50 dark:shadow-[#4f4f4f] dark:hover:shadow-myGreen hover:shadow-myGreen hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-3">
        <figure>
          {/* IMG DEL TRABAJO */}
          <img
            src={work.img}
            alt={lang === "en" ? work.titleEn : work.titleEs}
          />
        </figure>
        <div className="card-body p-6 gap-3">
          {/* TITULO DEL TRABAJO */}
          <h2 className="card-title font-poppins font-bold text-black dark:text-white text-start">
            {lang === "en" ? work.titleEn : work.titleEs}
          </h2>
          {/* DESCRIPCION DEL TRABAJO */}
          <p className="font-poppins text-start text-[#808080]">
            {lang === "en" ? work.descriptionEn : work.descriptionEs}
          </p>
          <div className="card-actions justify-between items-start gap-3 p-1">
            <div className="max-w-44 flex flex-wrap justify-start gap-1">
              {/* TRABAJOS */}
              {work.technologies.map((t, index) => (
                <div
                  key={index}
                  className="badge badge-outline badge-sm text-[#808080]"
                >
                  {t}
                </div>
              ))}
            </div>
            <div className="flex justify-start gap-1">
              {/* URL REPO GITHUB */}
              <a href={work.codeUrl} target="_blanck">
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
                  className="size-4 transition-all duration-200 dark:text-[#808080] hover:text-black dark:hover:text-white"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              {/* URL PAGINA WEB */}
              <a href={work.pageUrl} target="_blanck">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-4 transition-all duration-200 dark:text-[#808080] hover:text-black dark:hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

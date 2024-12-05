import Navbar from "../components/Navbar";
import { useLangContext } from "../components/LangContext";

function NotFound() {
  // TRAIGO EL LENGUAJE DEL CONTEXTO
  const { lang } = useLangContext();
  return (
    <div className="h-full w-full transition-all duration-300 bg-white dark:bg-[#101010] overflow-x-hidden">
      <Navbar />
      <div className="hero bg-white dark:bg-[#080808] h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl lg:text-5xl font-poppins font-bold text-black dark:text-white">
              404 Not Found
            </h1>
            <p className="py-6 text-lg font-poppins font-light text-[#808080]">
              The page you're trying to access does not exist
            </p>
            <span className="loading loading-spinner loading-lg text-myGreen"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

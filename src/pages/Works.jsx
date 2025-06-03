import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import WorksLayout from "../components/WorksLayout.jsx";
import { primaryWorks, scondaryWorks } from "../utils/utils.js";
import { useEffect } from "react";

// PÁGINA QUE SOLO MUESTRA LOS TRABAJOS
function Works() {
  // CUANDO VOY A /work HACE UN SCROLL AL INICIO
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-full w-full transition-all duration-300 bg-white dark:bg-[#101010]">
      <Navbar />
      <WorksLayout primaryWorks={primaryWorks} secondaryWorks={scondaryWorks} />
      <Footer />
    </div>
  );
}

export default Works;

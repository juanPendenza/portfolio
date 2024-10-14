import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WorksLayout from "../components/WorksLayout";
import { useEffect } from "react";

// PÁGINA QUE SOLO MUESTRA LOS TRABAJOS
function Work() {
  // CUANDO VOY A /work HACE UN SCROLL AL INICIO
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="h-full w-full bg-white dark:bg-[#080808]">
        <Navbar />
        <WorksLayout />
        <Footer />
      </div>
    </>
  );
}

export default Work;

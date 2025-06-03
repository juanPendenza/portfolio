import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import Skills from "./pages/Skills.jsx";
import Works from "./pages/Works.jsx";

// ESTE ARCHIVO SE ENCARGA DE ENRUTAR, ES DECIR, MOSTRAR UN COMPONENTE DETERMINADO CUANDO CAMBIAMOS DE PAGE
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/skills" element={<Skills />} />
          {/* ruta comodín a la que se dirige el cliente cuando no machea ninguna de las anteriores */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Skills from "./pages/Skills";
import Works from "./pages/Works";

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

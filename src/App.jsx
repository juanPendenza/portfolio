import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

// ESTE ARCHIVO SE ENCARGA DE ENRUTAR, ES DECIR, MOSTRAR UN COMPONENTE DETERMINADO CUANDO CAMBIAMOS DE PAGE
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/works" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

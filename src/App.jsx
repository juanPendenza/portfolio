import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
          <Route path="work" element={<Work />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

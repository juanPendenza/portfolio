import { useEffect } from "react";
import ContactForm from "../components/ContactForm.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import { useLangContext } from "../context/LangContext.jsx";

// PÁGINA QUE SOLAMENTE CONTIENE EL FORMULARIO PARA ENVIARME UN MSJ
function Contact() {
  // TRAIGO EL LENGUAJE DEL CONTEXTO
  const { lang } = useLangContext();

  // CUANDO VOY A /contact HACE UN SCROLL AL INICIO
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-full w-full transition-all duration-300 bg-white dark:bg-[#101010]">
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;

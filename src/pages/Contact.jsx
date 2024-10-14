import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// PÁGINA QUE SOLAMENTE CONTIENE EL FORMULARIO PARA ENVIARME UN MSJ
function Contact() {
  // CUANDO VOY A /contact HACE UN SCROLL AL INICIO
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="h-full w-full bg-white dark:bg-[#080808]">
        <Navbar />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default Contact;

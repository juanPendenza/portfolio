import { Form } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Formu from "../components/Formu";

function Contact() {
  return (
    <>
      {/* PÁGINA CONTACTO SOLAMENTE CONTIENE EL FORMULARIO PARA ENVIARME UN MSJ */}
      <div className="h-full w-full bg-gray-100">
        <Navbar />
        <Formu />
        <Footer />
      </div>
    </>
  );
}

export default Contact;

import emailjs from "emailjs-com";
import ModalMessage from "./ModalMessage";
import { useState } from "react";
import { useLangContext } from "./LangContext";

// COMPONENTE FORMULARIO DE CONTACTO, QUE LUEGO LO LLAMO LAS PAGES HOME Y CONTACT
function ContactForm() {
  const [success, setSuccess] = useState(undefined);
  const [error, setError] = useState(undefined);

  // CONTEXTO
  const { lang } = useLangContext();

  // FUNCION QUE ENVIA MAIL DESDE EL FORM DE CONTACTO
  function handleSubmit(e) {
    e.preventDefault();

    // estos valores los saco de mi cuenta de emailjs
    const SERVICE_ID = "service_bbzofv7";
    const TEMPLATE_ID = "template_7mx08uc";
    const USER_ID = "8vYFNaG-A11yBRfPl";

    // envío del form
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((res) => {
        {
          lang === "en"
            ? setSuccess("Message sent succesfully")
            : setSuccess("Mensaje enviado correctamente");
        }
        // muestro el modal de exito/error en el envío del form
        document.getElementById("my_modal_3").showModal();
        //reseteo el form
        e.target.reset();
      })
      .catch((err) => {
        {
          lang === "en"
            ? setError("Error sending message")
            : setError("Error al enviar el mensaje");
        }
        // muestro el modal de exito/error en el envío del form
        document.getElementById("my_modal_3").showModal();
        setTimeout(() => document.getElementById("my_modal_3").close(), 2000);
        //reseteo el form
        e.target.reset();
        console.error(err.text);
      });
  }
  return (
    <div className="hero h-screen">
      {/* MODAL */}
      <ModalMessage text={error || success} error={error ? true : false} />
      <div className="hero-content min-w-80 lg:w-full text-center pb-20 pt-14 lg:py-0">
        <div
          className={`w-full flex flex-col items-center justify-center gap-10 lg:gap-16 ${
            location.hash !== "#/contact" ? "" : "lg:pb-56"
          }`}
        >
          {/* TITULO */}
          <h1 className="text-5xl font-poppins font-bold transition-all duration-300 text-black dark:text-white text-center lg:pt-6 animate__animated animate__fadeInDown">
            {lang === "en" ? "Contact" : "Contacto"}
          </h1>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="w-full max-w-xl flex flex-col items-end gap-6"
          >
            {/* METO NOMBRE Y MAIL DENTRO DE UN DIV APARTE PARA PONERLO EN FILA EN RESOLUCIÓN DESKTOP */}
            <div className="w-full flex flex-col lg:flex-row gap-6">
              {/* NOMBRE */}
              <label className="form-control w-full animate__animated animate__fadeInLeft">
                <div className="label">
                  <span className="label-text font-poppins transition-all duration-300 font-semibold text-lg text-black dark:text-white">
                    {lang === "en" ? "Name" : "Nombre"}
                  </span>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder={lang === "en" ? "Your name" : "Tu nombre"}
                  className="input input-bordered dark:border-none w-full font-poppins transition-colors duration-300 text-black dark:text-white text-sm dark:placeholder-[#808080] bg-white dark:bg-[#232323] shadow-lg dark:shadow-[#383838] border-gray-100 focus:outline-myGreen"
                />
              </label>
              {/* MAIL */}
              <label className="form-control w-full animate__animated animate__fadeInRight">
                <div className="label">
                  <span className="label-text font-poppins transition-all duration-300 font-semibold text-lg text-black dark:text-white">
                    {lang === "en" ? "Mail" : "Correo"}
                  </span>
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder={lang === "en" ? "You@gmail.com" : "Tu@gmail.com"}
                  className="input input-bordered dark:border-none w-full font-poppins transition-colors duration-300 text-black dark:text-white text-sm dark:placeholder-[#808080] bg-white dark:bg-[#232323] shadow-lg dark:shadow-[#383838] border-gray-100 focus:outline-myGreen"
                />
              </label>
            </div>
            {/* MENSAJE */}
            <label className="form-control w-full lg:col-span-2 animate__animated animate__fadeInLeft">
              <div className="label">
                <span className="label-text font-poppins transition-all duration-300 font-semibold text-lg text-black dark:text-white">
                  {lang === "en" ? "Message" : "Mensaje"}
                </span>
              </div>
              <textarea
                name="message"
                className="textarea textarea-bordered dark:border-none w-full min-h-40 font-poppins transition-colors duration-300 text-md text-black dark:text-white dark:placeholder-[#808080] bg-white dark:bg-[#232323] shadow-lg dark:shadow-[#383838] border-gray-100 focus:outline-myGreen"
                placeholder={
                  lang === "en" ? "Leave a message" : "Deja un mensaje"
                }
              ></textarea>
            </label>
            {/* BOTÓN ENVIAR */}
            <div className="w-full flex justify-end animate__animated animate__fadeInUp transition-all duration-300">
              <button
                type="submit"
                className="btn w-full lg:w-1/2 shadow-lg dark:shadow-[#383838] border-none bg-myGreen hover:bg-myGreen hover:outline hover:outline-2 hover:outline-black dark:hover:outline-white hover:outline-offset-2 font-poppins text-lg text-black font-bold rounded-full"
              >
                {lang === "en" ? "Send" : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

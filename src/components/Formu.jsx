import React from "react";

function Formu() {
  // FUNCIÓN QUE SE EJECUTA CUANDO ENVÍO EL FORMULARIO DE CONTACTO
  function sendForm(e) {
    e.preventDefault();
    // ESTA FUNCIÓN TIENE QUE ENVIARME EL MENSAJE DENTRO DEL TEXTTAREA A MI MAIL
  }
  return (
    <div className="h-screen pt-28">
      <span className="flex justify-center font-poppins font-extrabold text-black text-5xl mb-12">
        Contactame
      </span>
      <div className="w-full flex flex-col justify-start items-center gap-5">
        <form
          onSubmit={(e) => sendForm(e)}
          className="w-3/4 flex flex-col justify-center items-center gap-5"
        >
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-poppins font-semibold text-gray-600">
                Nombre
              </span>
            </div>
            <input
              type="text"
              className="input input-bordered shadow-xl focus:ring-2 focus:ring-offset-2 focus:ring-[#00BFFF] w-full bg-white"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-poppins font-semibold text-gray-600">
                Mail
              </span>
            </div>
            <input
              type="text"
              className="input input-bordered shadow-xl focus:ring-2 focus:ring-offset-2 focus:ring-[#00BFFF] w-full bg-white"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-poppins font-semibold text-gray-600">
                Mensaje
              </span>
            </div>
            <textarea className="textarea textarea-bordered shadow-xl focus:ring-2 focus:ring-offset-2 focus:ring-[#00BFFF] h-24 bg-white"></textarea>
          </label>
          <button className="btn w-full border-none shadow-xl bg-[#00BFFF] font-poppins font-semibold text-white">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Formu;

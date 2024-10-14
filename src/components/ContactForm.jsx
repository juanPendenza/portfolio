// COMPONENTE FORMULARIO DE CONTACTO, QUE LUEGO LO LLAMO LAS PAGES HOME Y CONTACT
function ContactForm() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content min-w-80 lg:w-full text-center pb-20 pt-14 lg:py-0">
        <div
          className={`w-full flex flex-col items-center justify-center gap-10 ${
            location.pathname !== "/contact" ? "" : "lg:pb-56"
          }`}
        >
          {/* TITULO */}
          <h1 className="text-5xl font-poppins font-bold text-black dark:text-white text-center lg:pt-6">
            Contact
          </h1>
          <div className="w-full max-w-xl flex flex-col items-end gap-6">
            {/* METO NOMBRE Y MAIL DENTRO DE UN DIV APARTE PARA PONERLO EN FILA EN RESOLUCIÓN DESKTOP */}
            <div className="w-full flex flex-col lg:flex-row gap-6">
              {/* NOMBRE */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-poppins font-semibold text-lg text-black dark:text-white">
                    Name
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered dark:border-none w-full font-poppins text-black dark:text-white text-sm dark:placeholder-[#808080] bg-white dark:bg-[#232323] shadow-lg dark:shadow-[#383838] border-gray-100 focus:outline-[#00adb5]"
                />
              </label>
              {/* MAIL */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text font-poppins font-semibold text-lg text-black dark:text-white">
                    Mail
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="You@gmail.com"
                  className="input input-bordered dark:border-none w-full font-poppins text-black dark:text-white text-sm dark:placeholder-[#808080] bg-white dark:bg-[#232323] shadow-lg dark:shadow-[#383838] border-gray-100 focus:outline-[#00adb5]"
                />
              </label>
            </div>
            {/* MENSAJE */}
            <label className="form-control w-full lg:col-span-2">
              <div className="label">
                <span className="label-text font-poppins font-semibold text-lg text-black dark:text-white">
                  Message
                </span>
              </div>
              <textarea
                className="textarea textarea-bordered dark:border-none w-full min-h-40 font-poppins text-md text-black dark:text-white dark:placeholder-[#808080] bg-white dark:bg-[#232323] shadow-lg dark:shadow-[#383838] border-gray-100 focus:outline-[#00adb5]"
                placeholder="Leave a message"
                name="message"
              ></textarea>
            </label>
            {/* BOTÓN ENVIAR*/}
            <button className="btn w-full lg:w-1/2 border-none bg-[#00adb5] dark:bg-[#00adb5]/80 hover:bg-[#00adb5]/80 dark:hover:bg-[#00adb5] font-poppins text-lg text-black dark:text-white hover:text-white dark:hover:text-black shadow-lg rounded-full">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

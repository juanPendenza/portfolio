import { useLangContext } from "./LangContext";

{
  /* MODAL DE EXITO/ERROR */
}
function ModalMessage({ text, error }) {
  // TRAIGO EL CONTEXTO
  const { lang } = useLangContext();

  return (
    <dialog id="my_modal_3" className="modal">
      <div
        className={`modal-box ${
          error ? "bg-red-500" : "bg-myGreen"
        } absolute lg:bottom-8 lg:right-8`}
      >
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">
            ✕
          </button>
        </form>
        <h3 className="font-bold font-poppins text-xl text-black">{text}</h3>
        <p className="py-4 text-black/65 font-poppins text-sm">
          {lang === "en"
            ? "Press ESC key or click on ✕ button to close"
            : "Presiona la tecla ESC o clickeá la ✕ para cerrar"}
        </p>
      </div>
    </dialog>
  );
}

export default ModalMessage;

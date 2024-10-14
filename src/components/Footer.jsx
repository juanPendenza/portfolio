import { Link } from "react-router-dom";
import Logo from "./Logo";

// FOOTER DE LAS PAGES
function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 dark:border-[#383838] p-8 bg-white dark:bg-[#080808]">
      <div className="flex flex-col lg:flex-row items-center justify-between px-5 gap-10">
        <div className="flex flex-col gap-2">
          {/* SI HAGO CLICK EN EL LOGO ME LLEVA A LA HOME */}
          <Link
            to={"/"}
            className="w-full text-center border-b border-gray-300 dark:border-[#383838] pb-3"
          >
            <Logo />
          </Link>
          <span className="font-poppins text-gray-300 dark:text-[#808080]">
            Juan Pablo Pendenza
          </span>
        </div>
        {/* CADA ICONO CON SU LABEL ES UN LINK A LA RED SOCIAL O CONTACTO CORRESPONDIENTE */}
        <div className="flex gap-4">
          <a href={""}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-github css-svt5ra"
              className="transition-all duration-200 dark:text-[#808080] hover:text-black dark:hover:text-white"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
          <a href={""}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-linkedin css-svt5ra"
              className="transition-all duration-200 dark:text-[#808080] hover:text-black dark:hover:text-white"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>linkedin
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

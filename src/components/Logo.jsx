import React from "react";

// LOGO QUE APARECE EN EL NAV Y EN EL FOOTER
function Logo() {
  return (
    <button onClick={() => window.scrollTo(0, 0)}>
      <span
        className="text-xl font-poppins font-bold text-black dark:text-white hover:text-lg transition-all duration-300"
        // no me deja usar mi color myGreen, por eso pongo el hexa
        style={{ filter: `drop-shadow(4px 4px #70ffaf)` }}
      >
        juan.dev
      </span>
    </button>
  );
}

export default Logo;

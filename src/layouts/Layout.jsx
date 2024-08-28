import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//  EN EL LAYOUT LLAMAMOS A LOS COMPONENTES QUE QUEREMOS QUE SE MUESTREN TODO EL TIEMPO EN PANTALLA,
//  EN MI CASO EL NAVBAR Y EL FOOTER
function Layout() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen bg-[#111831] overflow-hidden">
        {/* QUIERO HACER EL COLOR DE FONDO DEL NAV UN POCO MAS TRANSPARENTE */}
        <div className="sticky top-0 z-50 h-16 bg-[#111831]">
          <Navbar />
        </div>
        <div className="h-full w-full">
          <Outlet />
        </div>
      </div>

      <div className="flex flex-col w-screen bg-[#111831]">
        <div className="bottom-0 z-50 h-52 bg-[#111831]">
          <Footer />
        </div>
        <div className="h-full w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;

//colores de fondo:
//151d3b
//111831

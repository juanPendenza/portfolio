/* import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//  EN EL LAYOUT LLAMAMOS A LOS COMPONENTES QUE QUEREMOS QUE SE MUESTREN TODO EL TIEMPO EN PANTALLA,
//  EN MI CASO EL NAVBAR Y EL FOOTER
function Layout() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen bg-white overflow-hidden">
        <div className="sticky top-0 z-50 h-16 bg-white">
          <Navbar />
        </div>
        <div className="h-full w-screen">
          <Outlet />
        </div>
      </div>

      <div className="flex flex-col w-screen bg-white">
        <div className="bottom-0 z-50 bg-white">
          <Footer />
        </div>
        <div className="h-full w-screen">
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
//00BFFF
 */

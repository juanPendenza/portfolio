import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="flex flex-col h-screen w-screen bg-black overflow-hidden">
      <div className="sticky top-0 z-50 h-16">
        <Navbar />
      </div>
      <div className="h-full w-full overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

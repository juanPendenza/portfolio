import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <div className="h-full w-full bg-white">
        <Navbar />
        {/* <Footer /> */}
        <div className="h-20">hola</div>
        <div className="h-20 border border-red-500">hola</div>
        <div className="h-20">hola</div>
        <div className="h-20">hola</div>
        <div className="h-20 border border-green-500">hola</div>
        <div className="h-20">hola</div>
        <div className="h-20">hola</div>
        <div className="h-20">hola</div>
        <div className="h-20">hola</div>
        <div className="h-20 border border-blue-500">hola</div>
        <div className="h-20">hola</div>
        <div className="h-20">hola</div>
        <div className="h-20">hola</div>
        <div className="h-20">hola</div>
      </div>
    </>
  );
}

export default Home;

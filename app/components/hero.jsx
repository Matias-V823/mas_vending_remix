import { Link } from "@remix-run/react";
import imgMaquina from "../../public/img/hero-img-removebg-preview.png";
import Header from "../components/header";

export default function equipo() {
  return (
    <main class="dark:bg-cyan-700 bg-white relative overflow-hidden h-screen">
      <div class="bg-white dark:bg-cyan-700 flex relative z-20 items-center overflow-hidden">
        <div class="container mx-auto px-6 flex relative py-16">
          <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
            <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
              MÁS
              <span class="text-5xl sm:text-7xl">VENDING</span>
            </h1>
            <p class="text-sm sm:text-base text-gray-700 dark:text-white">
              Dimension of reality that makes change possible and
              understandable. An indefinite and homogeneous environment in which
              natural events and human existence take place.
            </p>
            <div class="flex mt-8 gap-5">
              <Link to="maquinas"
                
                class="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
              >
                Saber más
              </Link>
              <Link
                to="contacto"
                class="bg-gradient-to-r from-slate-50 to-slate-50 hover:from-slate-100 hover:to-slate-300 text-black font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
              >
                Contactar
              </Link>
            </div>
          </div>
          <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
            <img src={imgMaquina} class="max-w-xs md:max-w-sm m-auto" />
          </div>
        </div>
      </div>
    </main>
  );
}

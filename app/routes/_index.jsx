export const meta = () => {
  return [{ title: "MÁS VENDING | Inicio" }];
};

import Hero from "../components/hero";
import Categorias from "../components/categorias";
import Servicios from "../components/services";
import BreakNews from "../components/breakNews";


export default function Index() {
  return (
    <div>
      <Hero/>
      <Categorias/>
      <Servicios/>
      <BreakNews/>


    </div>
  );
}

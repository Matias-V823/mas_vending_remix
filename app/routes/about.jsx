import Nosotros from "../../public/img/nosotros.png";
import Equipo from "../components/equipo";

export default function About() {
  return (
    <div>
        <section className="relative">
            <img  className="w-full brightness-[0.35]	"  src={Nosotros}/>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h3 className="md:text-xl text-[5px] font-arial  text-zinc-100">
              La innovación y la comodidad se unen en una sola solución
            </h3>
            <h2 className="lg:text-8xl md:text-6xl sm:text-4xl text-[20px] font-bold py-2 uppercase text-zinc-200 ">
              QUIENES{" "}
              <span className="font-Opensans text-[#55BFED]">SOMOS</span>{" "}
            </h2>
            <p className="md:text-2xl sm:text-2xl text-[6px] text-zinc-200">
              En Mas Vendig, nos enorgullecemos de ser pioneros en la industria
              del vending, ofreciendo soluciones innovadoras que combinan
              comodidad, calidad y compromiso con el medio ambiente. Desde
              nuestro inicio, hemos estado comprometidos con la excelencia y la
              satisfacción del cliente, proporcionando un servicio personalizado
              que se adapta a las necesidades individuales de cada cliente.
              Creemos en la importancia de marcar una diferencia positiva en el
              mundo que nos rodea. Es por eso que nos comprometemos activamente
              a reducir nuestro impacto ambiental, utilizando tecnologías y
              prácticas sostenibles en nuestras operaciones diarias. Nos
              esforzamos por ser líderes en responsabilidad ambiental,
              trabajando en estrecha colaboración con nuestros clientes y
            </p>
            </div>
        </section>
      {/* <section className="w-full  py-16 px-4">
        <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2 mt-[10rem]">
          <div className="flex flex-col justify-center gap-1">
            <h3 className="font-arial text-1xl text-zinc-500	">
              La innovación y la comodidad se unen en una sola solución
            </h3>
            <h2 className="lg:text-8xl md:text-6xl sm:text-4xl text-3xl font-bold py-2 uppercase text-[#282828]">
              QUIENES{" "}
              <span className="font-Opensans text-[#55BFED]">SOMOS</span>{" "}
            </h2>
            <p className="md:text-2xl sm:text-2xl text-xl text-gray-700">
              En Mas Vendig, nos enorgullecemos de ser pioneros en la industria
              del vending, ofreciendo soluciones innovadoras que combinan
              comodidad, calidad y compromiso con el medio ambiente. Desde
              nuestro inicio, hemos estado comprometidos con la excelencia y la
              satisfacción del cliente, proporcionando un servicio personalizado
              que se adapta a las necesidades individuales de cada cliente.
              Creemos en la importancia de marcar una diferencia positiva en el
              mundo que nos rodea. Es por eso que nos comprometemos activamente
              a reducir nuestro impacto ambiental, utilizando tecnologías y
              prácticas sostenibles en nuestras operaciones diarias. Nos
              esforzamos por ser líderes en responsabilidad ambiental,
              trabajando en estrecha colaboración con nuestros clientes y
            </p>
          </div>
          <img className="w-[600px] mx-auto my-4" src={Nosotros} alt="" />
        </div>
      </section> */}
      {/* Cartas de Misión, Visión y Valores */}
      <section className="flex flex-row justify-center w-full pt-3 pb-5 px-4 mt-[8rem] mb-[8rem] flex-wrap gap-5 ">
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md justify-center">
          <div className="p-6">
            <h3 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {/* <FaBullseye className="mr-2" /> */}
              MISIÓN
            </h3>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Aut ipsa alias animi libero voluptatibus voluptas quod provident
                non! Maiores natus ut, assumenda saepe eius nihil! Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. A, ea.
            </p>
          </div>
        </div>
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md justify-center">
          <div className="p-6">
            <h3 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {/* <FaEye className="mr-2" /> */}
              VISIÓN
            </h3>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Aut ipsa alias animi libero voluptatibus voluptas quod provident
              non! Maiores natus ut, assumenda saepe eius nihil! Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. A, ea.
            </p>
          </div>
        </div>
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md justify-center">
          <div className="p-6">
            <h3 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {/* <FaHeart className="mr-2" /> */}
              VALOR
            </h3>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Aut ipsa alias animi libero voluptatibus voluptas quod provident
              non! Maiores natus ut, assumenda saepe eius nihil! Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. A, ea.
            </p>
          </div>
        </div>
      </section>
      <section>
            <div className="flex flex-col items-center font-bold">
                <h4 className="lg:text-7xl md:text-5xl  sm:text-3xl text-2xl text-[#55BFED]">MÁS VENDING</h4>
                <h2 className="lg:text-7xl md:text-5xl  sm:text-2xl text-2xl text-[#282828]">CONOCE A NUESTRO EQUIPO</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-5 mt-[8rem] mb-[8rem] ">
                <Equipo/>
                <Equipo/>
                <Equipo/>
            </div>
      </section>
    </div>
  );
}

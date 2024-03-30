export default function breakNews() {
  return (
    <div className="px-2 py-20 w-full flex justify-center">
      <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
        <div className="lg:w-1/2">
          <div
            className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
            // style="background-image:url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97')"
          ></div>
        </div>
        <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
          <h2 className="text-3xl text-gray-800 font-bold">
            Camanchaca inauguró expendedora de conservas de Jurel en la Estación Puerto de Valparaíso
            <span class="text-indigo-600">Choices</span>
          </h2>
          <p className="mt-4 text-gray-600">
          ¡Un superalimento al alcance de tod@s! La Jurelmática de nuestra marca #ÚnicoChileno llegó a la Estación Puerto de Valparaíso🥫🐟, 
          gracias a una alianza con Empresa de los Ferrocarriles del Estado #EFE.
          </p>
          <div className="mt-8">
            <a
              href="#"
              class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded"
            >
              Leer más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

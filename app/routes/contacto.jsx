export default function Contacto(){
    return(
        <div className="flex w-full min-h-screen justify-center items-center">
            <div className="flex flex-col md:flex-row md:space-x-6  space-y-6 md:space-y-0 bg-cyan-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-xl text-white">
                <div className="flex flex-col justify-between">
                    <div>
                        <h1 className="font-bold text-4xl tracking-wide">Contactanos!</h1>
                        <p className="pt-2 text-cyan-100 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis repellendus sed impedit quod nobis inventore quia dolorum nam commodi exercitationem! 
                        </p>
                    </div>
                    <div className="flex flex-col space-y-6 mt-8">
                        <div className="inline-flex space-x-2 items">
                            <ion-icon name="call-outline"></ion-icon>
                            <span>+56962xxxxx</span>
                        </div>
                        <div className="inline-flex space-x-2 items">
                            <ion-icon name="mail-outline"></ion-icon>
                            <span>crossi.expendedoras@gmail.com</span>
                        </div>
                        <div className="inline-flex space-x-2 items">
                            <ion-icon name="location-outline"></ion-icon>
                            <span>11, oriente viña del mar</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex space-x-4 text-lg">
                            <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-white rounded-xl shadow-lg p-8 md:w-96">
                        <form action="" className="flex flex-col space-y-4">
                            <div>
                                <label htmlFor="" className="text-sm text-black">Nombre completo</label>

                                <input type="text" placeholder="Ingrese su nombre completo" class="text-black ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-600"/>
                            </div>
                            <div>
                                <label htmlFor="" className="text-sm text-black">Correo Electronico</label>
                                <input type="email" placeholder="Ingrese su correo electronico" class="text-black ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-600"/>
                            </div>
                            <div>
                                <label htmlFor="" className="text-sm text-black">Telefono</label>
                                <input type="number" placeholder="Ingrese su numero de telefono" class="text-black ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-600"/>
                            </div>
                            <div>
                                <label htmlFor="" className="text-sm text-black">Mensaje</label>
                                <textarea name="" id="" cols="30" rows="4" placeholder="Cuentenos su interes" className="text-black ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-600"></textarea>
                            </div>
                            <button className="inline-block self-end bg-cyan-700 text-white font-bold py-2 px-6 rounded-md uppercase text-sm"> 
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { Link } from '@remix-run/react'

const header = () => {
  return (
    <header class="h-24 sm:h-32 flex items-center z-30 w-full dark:bg-cyan-700 bg-white ">
        <div class="container mx-auto px-6 flex items-center justify-between">
          <div class="uppercase text-gray-800 dark:text-white font-black text-3xl">
            MÁSVENDING
          </div>
          <div class="flex items-center">
            <nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
              <Link to="/" className='py-2 px-6 flex'>
                  Inicio
              </Link>
              <Link to="maquinas" className='py-2 px-6 flex'>
                  Máquinas
              </Link>
              <Link to="about" className='py-2 px-6 flex'>
                  Sobre Nosotros
              </Link>
              <Link to="contacto" className='py-2 px-6 flex'>
                  Contacto
              </Link>
            </nav>
            <button className="lg:hidden flex flex-col ml-4">
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
            </button>
          </div>
        </div>
      </header>
  )
}

export default header

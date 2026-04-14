import logo from '../../assets/logo-prueba.png'

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex justify-center p-8">
      {/* Contenedor principal sin fondo pesado */}
      <div className="flex justify-between items-center w-full max-w-7xl px-4">
        
        {/* LOGO con un ligero efecto de elevación */}
        <a href="/" className="transition-transform duration-300 hover:scale-105">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
        </a>

        {/* MENU con tipografía Quicksand para modernidad */}
        <div className="flex items-center gap-12">
          <ul className="flex gap-10 items-center font-quicksand font-bold tracking-[0.2em] text-sm uppercase text-brand-black">
            <li className="relative group cursor-pointer">
              <a href="#menu-section" className="hover:text-brand-red transition-colors duration-300 block py-1">
                Menú
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="relative group cursor-pointer">
              <a href="#contacto" className="hover:text-brand-red transition-colors duration-300 block py-1">
                Contacto
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}
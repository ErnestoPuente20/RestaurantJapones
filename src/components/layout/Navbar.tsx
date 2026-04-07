import React from 'react'
import logo from '../../assets/logo-prueba.png'

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="navbar-glass flex justify-between h-16 items-center w-full max-w-6xl px-10">
        <a href="/">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </a>
        <ul className="flex gap-10 items-center font-bold tracking-wide text-black-site">
          <li className="nav-item cursor-pointer">Menú</li>
          <li className="nav-item cursor-pointer">Contacto</li>
        </ul>
      </div>
    </nav>
  )
}

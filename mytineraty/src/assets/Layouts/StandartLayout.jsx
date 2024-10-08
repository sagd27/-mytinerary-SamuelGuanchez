import { Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const links = [
  { name: "Home", href: "#" },
  { name: "Cities", href: "../Cities.jsx" }
];

export default function StandartLayout() {
  const [menu, setMenu] = useState(false);
  
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header>
          <nav className="flex flex-col md:flex-row justify-between items-center w-full h-auto bg-navbarfooter text-letrasNavFooter font-semibold p-4">
            <div>
              <p className="text-lg">My Tinerary</p>
            </div>

            {/* Botón de menú en pantallas pequeñas */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu}>
                <FiMenu className="text-fondo w-10 h-10 m-1" />
              </button>
            </div>

            {/* Contenido del menú: se oculta en pantallas pequeñas y se despliega si el menú está activo */}
            <div className={`md:flex  sm:flex-col md:flex-row items-end md:items-center space-y-2 md:space-y-0 md:space-x-4 ${menu ? 'block' : 'hidden'} md:block`}>
              <ul className="flex flex-col md:flex-row">
                {links.map((link, idx) => (
                  <li key={idx} className="m-2">
                    <a href={link.href} className="hover:underline">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botón de usuario */}
            <div className="ml-5">
              <button className="rounded-full border-2 border-current p-2 ml-4 hover:bg-current hover:text-fondo transition-colors duration-300">
                <FaUser className="w-10 h-5 hover:text-navbarfooter transition-colors duration-300" />
              </button>
            </div>
          </nav>
        </header>

        <main className="flex flex-col flex-grow bg-fondo justify-center">
          <Outlet />
        </main>

        <footer className="flex flex-col sm:flex-row justify-around bg-navbarfooter text-letrasNavFooter font-semibold p-4">
          <div className="m-4 p-2">
            <p className="text-2xl">Cites:</p>
            <p>Home</p>
            <p>Cities</p>
          </div>

          <div className="m-4 p-2">
            <p className="text-2xl">Contact Us</p>
            <p>123 Street, City</p>
            <p>Email: contact@mytinerary.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </footer>
      </div>
    </>
  );
}

import { useState } from "react";
import { NavLink } from "react-router-dom";
import React from 'react'
import { FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const links = [
        { name: "Home", href: "#" },
        { name: "Cities", href: "../Cities.jsx" }
      ];
      

export default function Navbar() {
        const [menu, setMenu] = useState(false);
  
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
        <header>
        <nav className="flex flex-col md:flex-row justify-between items-center w-full h-auto bg-navbarfooter text-letrasNavFooter font-semibold p-4">
          <div>
            <p className="text-lg">My Tinerary</p>
          </div>

        
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              <FiMenu className="text-fondo w-10 h-10 m-1" />
            </button>
          </div>

         
          <div className={`md:flex  sm:flex-col md:flex-row items-end md:items-center space-y-2 md:space-y-0 md:space-x-4 ${menu ? 'block' : 'hidden'} md:block`}>
            <ul className="flex flex-col md:flex-row">
             
                <li  className="m-2">
                      <NavLink className="hover:underline" to={"/Home"}>Home</NavLink>
                </li>
                <li className="m-2">
                      <NavLink className="hover:underline" to={"/Cities"}>Cities</NavLink>

                </li>
      
            </ul>

            <div className="">
            <button className="rounded-full border-2 border-current p-2  hover:bg-current hover:text-fondo transition-colors duration-300">
              <FaUser className="w-10 h-5 hover:text-navbarfooter transition-colors duration-300" />
            </button>
          </div>
          </div>

    
          
        </nav>
      </header>
  )
}

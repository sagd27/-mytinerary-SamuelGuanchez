import { Link, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import React from "react";

const links = [{}];

export default function StandartLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header>
          <nav className="flex flex-col md:flex-row justify-between items-center w-full h-20 bg-navbarfooter text-letrasNavFooter font-semibold p-4">
            <div>
              <p className="text-lg">My Tinerary</p>
            </div>
            <div className="flex flex-col md:flex-row items-end md:items-center space-y-2 md:space-y-0 md:space-x-4">
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="#" className="hover:underline">
                Cities
              </a>
              <div className="ml-5">
                <button className="rounded-full border-2 border-current p-2 ml-4 hover:bg-current hover:text-fondo transition-colors duration-300">
                  <FaUser className="w-10 h-5 hover:text-navbarfooter transition-colors duration-300" />
                </button>
              </div>
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

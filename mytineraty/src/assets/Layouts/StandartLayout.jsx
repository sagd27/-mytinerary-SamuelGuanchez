import { Link, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import React from "react";

const links = [{}];

export default function StandartLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header>
          <nav className="flex flex-col md:flex-row justify-between items-center w-full h-20  bg-navbarfooter text-letrasNavFooter font-semibold p-4">
            <div>
              <p className="text-lg">My Tinerary</p>
            </div>
            <div className="flex flex-col items-end md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <a href="#" className="hover:underline">
                Home
              </a>
              <a href="#" className="hover:underline">
                Cities
              </a>
              <div className="ml-5">
              <button className=" rounded-full border-2 border-current p-2 ml-4 hover:bg-current hover:text-fondo transition-colors duration-300">
                <FaUser className="w-10 h-5 hover:text-navbarfooter transition-colors duration-300" />
              </button>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex flex-grow bg-fondo justify-center">
          <Outlet />
        </main>

        <footer className="bg-navbarfooter text-letrasNavFooter font-semibold p-4">
          <p>Footer</p>
        </footer>
      </div>
    </>
  );
}

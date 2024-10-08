import React from "react";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="text-center max-w-xs w-auto h-auto m-1 shadow-lg sm:w-[50%]">
        <p className="text-sm md:text-3xl w-full p-2 h-auto m-2 font-semibold text-white  rounded-xl text-left bg-navbarfooter/75 ">
          "Plan your next adventure with personalized itineraries crafted by
          local experts. Discover the world your way!"
        </p>
        <button className="bg-navbarfooter text-white font-semibold p-4 m-4 rounded-full hover:bg-letras hover:text-black transition duration-300">
          Explore now
          <NavLink className="hover:underline" to={"/Cities"}></NavLink>
        </button>
      </div>
    </>
  );
}

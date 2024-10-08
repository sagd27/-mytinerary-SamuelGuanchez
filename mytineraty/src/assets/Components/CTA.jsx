import React from "react";

export default function () {
  return (
    <>
      <div className="text-center max-w-xs w-auto h-auto m-1 shadow-lg sm:w-[50%]">
        <p className="text-sm md:text-lg w-full h-auto m-2 font-semibold text-white  rounded-xl text-left bg-navbarfooter/75 p-1">
          "Plan your next adventure with personalized itineraries crafted by
          local experts. Discover the world your way!"
        </p>
        <button className="bg-navbarfooter text-white font-semibold py-2 px-4 rounded-full hover:bg-letras hover:text-black transition duration-300">
          Explore now
        </button>
      </div>
    </>
  );
}

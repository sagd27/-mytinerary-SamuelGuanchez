import React, { useState, useEffect } from "react";
import CityFilter from "./CityFilter";
import { NavLink } from "react-router-dom";

const CityCards = () => {
  const [cities, setCities] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const queryParam = filterValue ? `?name=${filterValue}` : ""; // Agregar parámetro de búsqueda
        const response = await fetch(`http://localhost:8080/api/cities/all${queryParam}`);
        const data = await response.json();
        setCities(data.response);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, [filterValue]); // Actualizar cada vez que cambie filterValue

  return (
    <div className="p-4">
      <CityFilter filterValue={filterValue} setFilterValue={setFilterValue} />
      <div className="flex flex-wrap justify-around">
        {cities.map((city) => (
          <div key={city._id} className="w-full sm:w-1/2 lg:w-1/4 m-2">
            <div className="bg-black rounded-lg overflow-hidden shadow-lg">
              <img
                src={city.photo}
                alt={city.name}
                className="w-full h-48 object-cover"
              />
              <div className="flex p-4 justify-between">
                <h5 className="text-xl font-semibold text-white">
                  {city.name}
                </h5>
                <button className="mt-2 bg-blue-800 text-white py-1 px-3 rounded hover:bg-slate-500">
                  <NavLink className="no-underline" to={"/Details"}>
                    View More
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityCards;

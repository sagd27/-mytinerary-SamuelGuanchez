// CityFilter.jsx
import React from 'react';

const CityFilter = ({ filterValue, setFilterValue }) => {
    return (
        <div className="flex mb-4 w-full justify-center">
            <input 
                type="text"
                placeholder="Buscar ciudad..."
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                className="border rounded p-2 sm:w-[30%] w-[50%]  "
            />
        </div>
    );
};

export default CityFilter;

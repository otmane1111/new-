import React, { useState } from 'react';

const Filters = ({ handleFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleSelectFilter = (filter) => {
    setSelectedFilter(filter);
    handleFilter(filter); // Appeler la fonction parente pour appliquer le filtre
  };

  return (
    <div>
      <h2>Filters</h2>
      <select value={selectedFilter} onChange={(e) => handleSelectFilter(e.target.value)}>
        <option value="">Select Filter</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="vegan">Vegan</option>
        <option value="gluten free">Gluten Free</option>
        {/* Ajoutez d'autres options de filtre ici */}
      </select>
    </div>
  );
};

export default Filters;

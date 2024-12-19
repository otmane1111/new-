import React, { useState } from 'react';

const IngredientFilters = ({ availableIngredients, handleIngredientFilter }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const toggleIngredient = (ingredient) => {
    const currentIndex = selectedIngredients.indexOf(ingredient);
    const newSelectedIngredients = [...selectedIngredients];

    if (currentIndex === -1) {
      newSelectedIngredients.push(ingredient);
    } else {
      newSelectedIngredients.splice(currentIndex, 1);
    }

    setSelectedIngredients(newSelectedIngredients);
    handleIngredientFilter(newSelectedIngredients);
  };

  return (
    <div>
      <h2>Ingredient Filters</h2>
      {availableIngredients.map(ingredient => (
        <label key={ingredient}>
          <input
            type="checkbox"
            value={ingredient}
            checked={selectedIngredients.includes(ingredient)}
            onChange={() => toggleIngredient(ingredient)}
          />
          {ingredient}
        </label>
      ))}
    </div>
  );
};

export default IngredientFilters;

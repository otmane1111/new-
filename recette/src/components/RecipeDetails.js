import React from 'react';

const RecipeDetails = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>Ingredients:</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Instructions:</p>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      {/* Add more details as needed */}
    </div>
  );
};

export default RecipeDetails;

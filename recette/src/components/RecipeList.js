import React from 'react';

const RecipeList = ({ recipes, handleRecipeClick }) => {
  return (
    <ul>
      {recipes.map(recipe => (
        <li key={recipe.id} onClick={() => handleRecipeClick(recipe.id)}>
          {recipe.title}
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;

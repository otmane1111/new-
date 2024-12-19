import React from 'react';

const Favorites = ({ favoriteRecipes }) => {
  return (
    <div>
      <h3>Favorites</h3>
      <ul>
        {favoriteRecipes.map(recipe => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;

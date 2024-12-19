import React, { useState } from 'react';
import RecipeService from '../services/RecipeService';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const results = await RecipeService.searchRecipes(query);
      setRecipes(results);
    } catch (error) {
      console.error('Error searching recipes:', error);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for recipes..." 
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      {recipes.length > 0 && (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
      )}
      {recipes.length === 0 && !loading && (
        <p>No recipes found. Try another search.</p>
      )}
    </div>
  );
};

export default RecipeSearch;

import React, { useState, useEffect } from 'react';
import './App.css';
import RecipeSearch from './components/RecipeSearch';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import Favorites from './components/Favorites';
import Filters from './components/Filters';
import IngredientFilters from './components/IngredientFilters'; // Import du composant IngredientFilters
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]); // État pour les recettes filtrées
  const [availableIngredients, setAvailableIngredients] = useState([]); // État pour les ingrédients disponibles

  useEffect(() => {
    // Charger les recettes initiales ou initialiser l'état
    fetchAvailableIngredients();
  }, []);

  const fetchAvailableIngredients = async () => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/food/ingredients/list?apiKey=YOUR_API_KEY`);
      setAvailableIngredients(response.data.map(ingredient => ingredient.name)); // Mettre à jour les ingrédients disponibles
    } catch (error) {
      console.error("Error fetching ingredients:", error);
    }
  };

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=YOUR_API_KEY`);
      setRecipes(response.data.results);
      setSelectedRecipe(null); // Réinitialisation de la recette sélectionnée après une recherche
      setFilteredRecipes(response.data.results); // Initialiser les recettes filtrées avec les résultats de la recherche
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
    }
  };

  const handleRecipeClick = (recipeId) => {
    const selected = recipes.find(recipe => recipe.id === recipeId);
    setSelectedRecipe(selected);
  };

  const handleFilter = (selectedFilter) => {
    // Implémentez la logique de filtrage en fonction du filtre sélectionné (par exemple, régime alimentaire comme végétarien, végétalien, sans gluten, etc.)
  };

  const handleIngredientFilter = (selectedIngredients) => {
    if (selectedIngredients.length === 0) {
      setFilteredRecipes(recipes); // Aucun filtre d'ingrédient sélectionné, afficher toutes les recettes
    } else {
      const filtered = recipes.filter(recipe => {
        // Vérifier si la recette contient tous les ingrédients sélectionnés
        return selectedIngredients.every(ingredient => recipe.ingredients.includes(ingredient));
      });
      setFilteredRecipes(filtered);
    }
  };

  const handleAddToFavorites = (recipe) => {
    const updatedFavorites = [...favoriteRecipes, recipe];
    setFavoriteRecipes(updatedFavorites);
    // Implémentez la persistance des favoris, par exemple via localStorage ou IndexedDB
  };

  return (
    <div className="App">
      <header className="navbar">
        <h1 style={{ margin: 0, color: 'white' }}>Application de Recettes de Cuisine</h1>
        <div className="nav-content">
          <div className="search-bar">
            <RecipeSearch handleSearch={handleSearch} />
          </div>
          <div className="filters">
            <Filters handleFilter={handleFilter} />
            <IngredientFilters availableIngredients={availableIngredients} handleIngredientFilter={handleIngredientFilter} />
          </div>
        </div>
      </header>
      <div className="content">
        <div className="recipe-list">
          <RecipeList recipes={filteredRecipes} handleRecipeClick={handleRecipeClick} />
        </div>
        <div className="recipe-details">
          {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
        </div>
        <div className="favorites">
          <Favorites favoriteRecipes={favoriteRecipes} />
        </div>
      </div>
    </div>
  );
}

export default App;

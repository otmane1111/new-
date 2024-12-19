import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Remplacez par votre clé API
const BASE_URL = 'https://api.spoonacular.com/recipes';

const RecipeService = {
  async searchRecipes(query) {
    try {
      const response = await axios.get(`${BASE_URL}/complexSearch`, {
        params: {
          query: query,
          apiKey: API_KEY,
        },
      });
      return response.data.results;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      return [];
    }
  },
};

export default RecipeService;

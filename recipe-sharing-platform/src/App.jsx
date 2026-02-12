// Import necessary dependencies from react-router-dom for routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import React hooks for state management and side effects
import { useState, useEffect } from "react";
// Import component pages
import HomePage from "./components/HomePage";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  // Initialize recipes state with data from localStorage
  // If no data exists in localStorage, initialize with empty array
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem("recipes");
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });

  // UseEffect hook to persist recipes to localStorage whenever they change
  // This ensures data persists between page refreshes
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
    console.log("Recipes saved to localStorage:", recipes);
  }, [recipes]);

  // Handler function to add new recipes to the state
  // This function is passed as a prop to AddRecipeForm
  const handleAddRecipe = (newRecipe) => {
    console.log("Adding new recipe:", newRecipe);
    setRecipes([...recipes, newRecipe]);
  };

  return (
    // Router component wraps the entire app to enable routing functionality
    <Router>
      <div className="container mx-auto px-4 py-8">
        {/* Routes define the different paths and their corresponding components */}
        <Routes>
          {/* Home route displays all recipes */}
          <Route path="/" element={<HomePage recipes={recipes} />} />
          {/* Add recipe route with form component */}
          <Route
            path="/add-recipe"
            element={<AddRecipeForm onAddRecipe={handleAddRecipe} />}
          />
          {/* Dynamic route for individual recipe details */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

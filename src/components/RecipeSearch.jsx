import { useState, useEffect } from "react";
import Recipes from "./GetRecipes";

function RecipeSearch() {
  const [query, setQuery] = useState("");

  const handleRecipeSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    Recipes(query);
  };

  return (
    <>
      <h1>Recipe Search</h1>
      <form onSubmit={handleRecipeSearch}>
        <input type="text" 
        placeholder="Search for a recipe"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        ></input>
        <button type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default RecipeSearch;

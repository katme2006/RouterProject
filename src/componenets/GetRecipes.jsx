import axios from 'axios';
import { useState, useEffect } from "react";

function Recipes() {

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('italian wedding soup');


  useEffect(() => {

    const getRecipes = async () => {
      try {
        const response = await axios.get('https://api.api-ninjas.com/v1/recipe', {
          headers: {
            'X-Api-Key': 'OcraVSMhMS5dKTKptGBOhA==neJzqvX0Y7CZ3vLe'
          },
          params: {
            query: query
          }
        });
        console.log(response);
        setRecipes(response.data);
      } catch (error) {
        console.error("Error getting Recipes: ", error);
      }
    };

    getRecipes();

  },[query]);

    return (
      <>
        <h1 className="text-blue-400">Recipes</h1>
       {recipes.map((recipe, index) => (
        <div key={index}>
            <h2>{recipe.title}</h2>
            <p>{recipe.ingredients}</p>
            <p>{recipe.serving}</p>
            <p>{recipe.instructions}</p>
        </div>
       ))}
      </>
    );
  }

export default Recipes;

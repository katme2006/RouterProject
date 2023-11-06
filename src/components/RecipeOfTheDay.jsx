import { useEffect, useState } from "react";
import axios from "axios";
import PexelPhoto from "./PexelsImage";
import Dish from "./Dish";

function RecipeOfTheDay() {
  const [recipe, setRecipe] = useState("Salmon");
  const [recipeObject, setRecipeObject] = useState(null);

  useEffect(() => {
    const getOneRecipe = async () => {
      try {
        const response = await axios.get(
          "https://api.api-ninjas.com/v1/recipe",
          {
            headers: {
              "X-Api-Key": "OcraVSMhMS5dKTKptGBOhA==neJzqvX0Y7CZ3vLe", 
            },
            params: {
              query: recipe,
            },
          }
        );

        if (response.data && response.data.length > 0) {
          setRecipeObject(response.data[0]);
        }
      } catch (error) {
        console.error("Error getting recipe: ", error);
      }
    };

    getOneRecipe();
  }, [recipe]); 

  
  if (!recipeObject) {
    return <div>Loading recipe of the day...</div>;
  }

  return (
    <div className="m-5 flex flex-col align-middle justify-center">
      <h3 className="text-blue-400 text-center w-3/4 m-auto mt-4 font-black text-2xl">
        Recipe of the Day: 
      </h3>
      <h4 className="text-blue-400 text-center w-3/4 m-auto mt-4 font-black text-xl">
      {recipeObject.title}
      </h4>
   
      <div className="w-52 h-52 m-auto mt-4 rounded-full border-4 overflow-hidden border-blue-600 flex justify-center items-center">
  <PexelPhoto query={recipeObject.title + " food"}/>
</div>

      <p className="w-3/4 m-auto mt-3  text-center text-xl">{recipeObject.servings}</p>
    </div>
  );
}

export default RecipeOfTheDay;

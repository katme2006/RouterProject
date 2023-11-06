import { useState } from "react";
import Recipes from "./GetRecipes";
import TopNav from "./TopNav";

function HomePage() {
  return (
    <>
      <div className="m-12">
        <h1 className="text-blue-400 text-center w-3/4 m-auto font-black text-7xl">
          Find a Recipe
        </h1>
      </div>

      <Recipes />

    </>
  );
}

export default HomePage;

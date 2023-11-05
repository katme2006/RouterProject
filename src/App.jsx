import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Recipes from "./componenets/GetRecipes";
import TopNav from "./componenets/TopNav";


function App() {
  return (
    <>
    <TopNav/>
      <div className="m-12">
        <h1 className="text-blue-400 text-center w-3/4 m-auto font-black text-7xl">
          Find a Recipe
        </h1>
      </div>

      <Recipes />
    </>
  );
}

export default App;

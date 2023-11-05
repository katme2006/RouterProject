import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Photo from "./componenets/UnsplashPhoto";
import Recipes from "./componenets/GetRecipes";


function App() {
  return (
    <>
      <h1 className="text-blue-400">Hello</h1>
      {/* <Photo/> */}

      <Recipes/>
    </>
  );
}

export default App;

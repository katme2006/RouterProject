import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Photo from "./UnsplashPhoto";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  const searchRecipes = async (event) => {
    event.preventDefault();

    if (query) {
      try {
        const response = await axios.get(
          "https://api.api-ninjas.com/v1/recipe",
          {
            headers: {
              "X-Api-Key": "OcraVSMhMS5dKTKptGBOhA==neJzqvX0Y7CZ3vLe",
            },
            params: {
              query: query,
            },
          }
        );
        console.log(response);
        setRecipes(response.data);
        setQuery('');
      } catch (error) {
        console.error("Error getting recipes: ", error);
      }
    }
  };

  return (
    <>
      <h1 className="text-blue-400">Recipes</h1>
      <div className="w-3/6 m-auto">
        <Form onSubmit={searchRecipes} className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="outline-primary" type="submit">
            Search
          </Button>
        </Form>
      </div>

      {/* <form onSubmit={searchRecipes}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a recipe"
        />
        <Button variant="outline-primary" type="submit">
          Search
        </Button>
      </form> */}
      <div className=" m-auto w-5/6 flex flex-wrap border justify-center ">
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <div key={index}>
            <Card style={{ width: "18rem", height:"20rem" }}>
              <Card.Img variant="top" src="none" />
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>
                  {recipe.servings}
                </Card.Text>
                <Button variant="success">Check it out</Button>
              </Card.Body>
            </Card>

          </div>
        
        ))
     
      )   : (
        <p>No recipes found. Try a different search!</p>
      )} </div>
    </>
  );
}

export default Recipes;

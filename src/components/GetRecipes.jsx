import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import PexelPhoto from "./PexelsImage";
import RecipeOfTheDay from "./RecipeOfTheDay";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [lastQuery, setLastQuery] = useState("");
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  const searchRecipes = async (event) => {
    event.preventDefault();

    if (query) {
      setSearchSubmitted(true);
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
        setLastQuery(query);
        setQuery("");
      } catch (error) {
        console.error("Error getting recipes: ", error);
      }
    }
  };

  return (
    <>
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

      {!searchSubmitted && <RecipeOfTheDay />}

      <div className="m-5">
        {searchSubmitted && (
          <h2>
            Results for "<strong>{lastQuery}</strong>"
          </h2>
        )}
        <div className=" m-auto w-5/6 flex flex-wrap justify-center mt-5 ">
          {recipes.length > 0
            ? recipes.map((recipe, index) => (
                <div key={index}>
                  <Card
                    style={{ width: "18rem", height: "20rem" }}
                    className="m-2 mb-5"
                  >
                    <div className=" h-64 flex overflow-y-hidden justify-center items-center bg-gray-200">
                      <PexelPhoto query={recipe.title + " food"} />
                    </div>
                    <Card.Body>
                      <Card.Title>{recipe.title}</Card.Title>
                      <Card.Text>{recipe.servings}</Card.Text>
                      <Button
                        variant="success"
                        className="bg-yellow-700 border-yellow-700 mt-3"
                      >
                        Check it out
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))
            : searchSubmitted && (
                <p>No recipes found. Try a different search!</p>
              )}{" "}
        </div>
      </div>
    </>
  );
}

export default Recipes;

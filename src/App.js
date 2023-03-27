import "./App.css";
import { useEffect, useState } from "react";
import video from "./food.mp4";
import MyRecipeComponent from "./MyRecipieComponent";

function App() {
  const MY_ID = "ef8cbc86";
  const MY_KEY = "c73ad37c996173138fd8f95ab677f997";

  const [mySearch, setMySearch] = useState("");
  const [myRecipe, setMyRecipe] = useState([]);

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    const responce = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=avacado&app_id=${MY_ID}&app_key=${MY_KEY}`
    );
    const data = await responce.json();
    setMyRecipe(data.hits);
    console.log(data.hits);
  };

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>
      <div className="container">
        <form>
          <input
            className="search"
            placeholder="Search..."
            onChange={myRecipeSearch}
            value={mySearch}
          ></input>
        </form>
      </div>
      <div className="container">
        <button>Find a recipe</button>
      </div>
      {myRecipe.map((element) => (
        <MyRecipeComponent />
      ))}
    </div>
  );
}

export default App;

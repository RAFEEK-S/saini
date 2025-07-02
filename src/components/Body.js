import { useState } from "react";
import Header from "./Header";
import Card from "./Card";
import recipes from "../components/recipesData";

const Body = () => {
  const [recipesData, setRecipesData] = useState(recipes);
  const [cart, setCart] = useState([]);
  const [rating, setRating] = useState(null);

  
  const addUser = (recipes) => {
    setCart((prev) => [...prev, recipes]);
    //adduser
  };

  const removeUser = (recipes) => {
    setCart(cart.filter((item) => item.id !== recipes.id));
  };
  const filteredRecipes = recipesData.filter((data) => data.rating >= rating);
  return (
    <div>
      <Header setRating={setRating} cart={cart.length} />

      <Card
        recipesData={filteredRecipes}
        addUser={addUser}
        removeUser={removeUser}
      />
    </div>
  );
};

export default Body;

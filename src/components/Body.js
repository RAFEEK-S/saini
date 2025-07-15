import { useState } from "react";
import Header from "./Header";
import Card from "./Card";
import recipes from "../components/recipesData";
import DishList from "../components/DishList";
import { Routes, Route } from "react-router-dom";
import UserRecipes from "../utils/UserRecipes";
const Body = () => {
  const [recipesData, setRecipesData] = useState(recipes);
  const [cart, setCart] = useState([]);
  const [rating, setRating] = useState(null);

  console.log(cart);

  const addUser = (recipes) => {
    const exist = cart.find((item) => item.id === recipes.id);

    if (exist) {
      // Update quantity for the existing item
      const updatedCart = cart.map(
        (item) =>
          item.id === recipes.id ? { ...item, qty: item.qty + 1 } : item // Example for Updating one element in an array of objects here updating omly the qty...
      );
      setCart(updatedCart);
    } else {
      // Add new item with quantity 1
      setCart((prev) => [...prev, { ...recipes, qty: 1 }]);
    }
  };
  const removeUser = (recipes) => {
    const exist = cart.find((item) => item.id === recipes.id);
    console.log(exist);
    if (!exist) return;
    if (exist.qty === 1) {
      setCart(cart.filter((item) => item.id !== recipes.id));
    } else {
      const updatedCart = cart.map((item) =>
        item.id === recipes.id ? { ...item, qty: item.qty - 1 } : item
      );
      setCart(updatedCart);
    }
  };

  // const removeUser = (recipes) => {
  //   setCart(cart.filter((item) => item.id !== recipes.id));
  // };
  const filteredRecipes = recipesData.filter((data) => data.rating >= rating);

  return (
    <UserRecipes.Provider value={{carts: cart }}>
      <div>
        <Routes>
          <Route
            path="/dishList"
            element={
              <>
                <Header setRating={setRating} cart={cart.length} />
                <DishList
                  cart={cart}
                  addUser={addUser}
                  removeUser={removeUser}
                />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header setRating={setRating} cart={cart.length} />
                <Card
                  recipesData={filteredRecipes}
                  addUser={addUser}
                  removeUser={removeUser}
                />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </UserRecipes.Provider>
  );
};

export default Body;

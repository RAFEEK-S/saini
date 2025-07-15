import  { useContext } from "react";
import UserRecipes from "../utils/UserRecipes";
const CardList = ({ recipes, addUser,removeUser }) => {

  const{carts}=useContext(UserRecipes)
  
  const isInCart = carts.some(item => item.id === recipes.id)

  const handleAddToCart = (recipes) => {
    addUser(recipes);
  };
  const handleRemoveCart = (recipes) => {
    removeUser(recipes);
  };
  
  return (
    <div className="w-72 h-auto border border-spacing-3 space-y-2 text-xl rounded-lg ">
      <img className="" alt="recipeimg" src={recipes.image} />
      <h1 className="text-center font-bold">{recipes.name}</h1>
      <div className="text-center py-3">
        <ul>
          <li>{recipes.cuisine}</li>
          <li>{recipes.rating}</li>
          <li>{recipes.reviewCount}</li>
        </ul>
        {!isInCart? (
          <button
            className="bg-slate-800 text-white py-2 px-2 rounded-lg"
            onClick={() => {
              handleAddToCart(recipes);
              
            }}
          >
            Add To Cart
          </button>
        ) : (
          <button
            className="bg-slate-800 text-white py-2 px-2 rounded-lg"
            onClick={() => {
           handleRemoveCart(recipes);
              
            }}
          >
            Remove Cart
          </button>
        )}
      </div>
    </div>
  );
};      

export default CardList;

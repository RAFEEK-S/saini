import React from "react";
import { Link } from "react-router-dom";
import ShowItems from "./ShowItems";

const DishList = ({cart,addUser,removeUser}) => {

  
  if (cart.length === 0) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-xl mb-4">ADD ITEMS TO THE CART</h1>
        <Link to="/" className="text-blue-500 underline">Go to Recipes</Link>
      </div>
    );
  }
  return (
    <div className="my-14 ">
      <Link to="/">
        <p className="font-bold text-xl">BACK</p>
      </Link>
      {
       cart?.map((items) => (<ShowItems key={items.id} menuItem={items} addUser={addUser} removeUser={removeUser}/> ))
        
       
      }
    </div>
  );
};

export default DishList;

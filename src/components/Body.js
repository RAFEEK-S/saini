import React, { useState } from 'react';
import Header from './Header';
import Card from './Card';
import recipes from '../components/recipesData'

const Body = () => {
   const [recipesData, setRecipesData] = useState(recipes);
   const [cart,setCart] = useState([])
   console.log(cart)
   console.log(cart.length)
const addUser = (recipes) =>{
  setCart((prev) => [...prev,recipes])
  //adduser
}
  return (
    <div>
      <Header recipesData={recipesData} />
      <Card recipesData={recipesData} addUser={addUser}/>
    </div>
  );
}

export default Body;
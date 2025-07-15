
import CardList from "../components/CardList";
import  { useContext } from "react";
import UserRecipes from "../utils/UserRecipes";
const Card = ({ recipesData, addUser, removeUser }) => {
const {carts} = useContext(UserRecipes)
console.log(carts)
  
  return (
    <div className="w-8/12 mx-auto flex flex-wrap gap-6 justify-center my-20 ">
      
      {recipesData?.map((recipes) => (
        <CardList
          key={recipes.id}
          recipes={recipes}
          addUser={addUser}
          removeUser={removeUser}
        />
      ))}
    </div>
  );
};

export default Card;

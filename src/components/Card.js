
import CardList from '../components/CardList'
const Card = ({recipesData,addUser,removeUser}) => {
  return (
    <div className='w-8/12 mx-auto flex flex-wrap gap-6 justify-center my-20 '>
      {
        recipesData?.map((recipes) =>{
           return  <CardList key={recipes.id} recipes={recipes} addUser={addUser} removeUser={removeUser} />
        } )
      }
    
    </div>
    
  )
}

export default Card
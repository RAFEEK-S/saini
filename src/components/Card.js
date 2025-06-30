import React from 'react'
import CardList from '../components/CardList'
const Card = ({recipesData,addUser}) => {
  return (
    <div className='flex flex-wrap gap-6 justify-center my-4'>
      {
        recipesData?.map((recipes) =>{
           return  <CardList key={recipes.id} recipes={recipes} addUser={addUser} />
        } )
      }
    
    </div>
    
  )
}

export default Card
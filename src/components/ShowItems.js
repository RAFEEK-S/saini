import React from 'react';


const ShowItems = ({menuItem,addUser,removeUser}) => {
  
  return (
 
   <div className="flex items-center w-6/12 mx-auto my-3 border border-rose-600 justify-center">
        <img
          className="w-32 h-32 rounded-lg my-2 object-cover"
          alt="foodimg"
          src={menuItem.image}
        ></img>
        <div className="text-3xl mx-5 ">
          <button type="button" className="px-2 bg-slate-500  mx-2" onClick={()=>addUser(menuItem)}>+</button>
          <span>{menuItem.qty}</span>
          <button type="button" className="px-2 bg-slate-500  mx-2" onClick={()=>removeUser(menuItem)}>-</button>
        </div>
        <div>
          <p>{menuItem.name}</p>
          <p>{menuItem.cuisine}</p>
        </div>
      </div>
  
  )
}

export default ShowItems
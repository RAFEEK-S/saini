import React from 'react'

const IncomeExpense = ({item,handleDelete}) => {
  

  return (
    <div className='cursor-pointer'>
      <span>{item.id}</span>
      <span>{item.type}</span>
      <span>{item.money}</span>
      <span onClick={()=>handleDelete(item)}>✖</span>
    </div>
  )
}

export default IncomeExpense;
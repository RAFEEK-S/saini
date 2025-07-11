import  { useContext } from 'react';
import IncomeExpense from './IncomeExpense';
import UserContext from '../utils/UserContext';
const Transaction = ({handleDelete}) => {
    const {expenseTracker} =useContext(UserContext)
    if(!expenseTracker) return;
  return (
    <div> 
        {
          expenseTracker?.map((item) =>(<IncomeExpense key={item.id} item={item} handleDelete={handleDelete}/>))
        }
    </div>
  )
}

export default Transaction
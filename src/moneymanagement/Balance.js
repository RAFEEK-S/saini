import  { useState } from 'react';
import Amount from './Amount';
import Transaction from './Transaction';
import UserContext from '../utils/UserContext';
const Balance = () => {
   
   
    const[finance,setFinance] = useState("income");
    const[amount,setAmount] = useState('');
    const [object,setObject] = useState([]);
     //console.log(finance);
    // console.log(amount);
    

     const handleSubmit = () => {
     if (!finance || amount === '') return;

    const transaction = {
      id:Math.floor(Math.random() * 1000),
      type: finance,
      money: Number(amount),
    };

    setObject((prev) => [...prev, transaction]);
    
    setAmount('');
   
  };

 const expense = object
  .filter((item) => item.type === "expense")
  .reduce((acc, item) => acc + item.money, 0);
 
 const income = object
  .filter((item) => item.type === "income")
  .reduce((acc, item) => acc + item.money, 0);
 

  const balance = income-expense;
  console.log(balance)

  const handleDelete = (item) => {
      setObject(object.filter((trans)=>(trans.id !== item.id)))
  }
   
  return (
    <UserContext.Provider value={{ expenseTracker: object}}>
    <div>
        <Amount amount={amount} setAmount={setAmount} setFinance={setFinance} handleSubmit={handleSubmit}/>
       <Transaction  handleDelete={handleDelete}/>
        
    </div>
    </UserContext.Provider>
  )
}

export default Balance
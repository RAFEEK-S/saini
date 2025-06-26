import React, { useState } from 'react'

function AgeCalculator() {
    const [birthDate,setBirthDate]= useState("");
    const [age,setAge]= useState(null);
    const [error,setError]= useState("");

    const calculateAge = () => {
        setError("");
        if(!birthDate) {
            setError("please select a date");
            setAge(null);
            return;
        }

        const today = new Date();
        const birth = new Date(birthDate);

        if (birth > today ) {
            setError("Birthdate cannot be in the future");
            setAge(null);
            return;
        } 
        
        let years  = today.getFullYear() - birth.getFullYear();
        //console.log(years)
        let months = today.getMonth() - birth.getMonth();
        let days = today.getDate() - birth.getDate();

        

        if (days < 0) {
            months--;
            const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += prevMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        setAge({years,months,days})
       }

  return (
    <div>
        <input 
        type="date" 
        onChange={(e) => setBirthDate(e.target.value)}
        value={birthDate}/>

        <button onClick={calculateAge}>Calculate Age</button>

        {age && !error && (
            <div>
                {age.years} years, {age.months} months, {age.days} days
            </div>
        )}
    </div>
  )
}

export default AgeCalculator;
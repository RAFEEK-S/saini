import React, { useState } from "react";

const Chips = () => {
    
  const [chipsName, setChipsName] = useState([]);
  const [chipsInput, setChipsInput] = useState("");

  const handlechipsName = () => {
    if(chipsInput.trim() === "") return;

     setChipsName((prev) => [...prev, chipsInput.trim()]);
     setChipsInput("")
    
  };

  const handleDeleteChips = (items) => {
    setChipsName(chipsName.filter((item) => ( item !== items)))
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Type Text"
        value={chipsInput}
        onChange={(e) => setChipsInput(e.target.value)}
      />
      <button type="text" onClick={()=>handlechipsName()}>
        submit
      </button>

      {chipsName?.map((item, index) => {
        return (
          <div>
            <button type="button">
              <span key={index}>{item}</span>
              <span onClick = {()=>handleDeleteChips(item)}>✖</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Chips;

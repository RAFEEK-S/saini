import React from "react";

const Amount = ({ amount, setAmount, setFinance, handleSubmit }) => {
  return (
    <div>
      <select onChange={(e) => setFinance(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <div>
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          submit
        </button>
      </div>
    </div>
  );
};

export default Amount;

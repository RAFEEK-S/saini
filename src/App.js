
import { useState } from 'react';
import './App.css';
import AgeCalculator from './AgeCalculator';



function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState({
    name: "",
    place: "",
  });

  const handleChange = (e, field) => {
    setInputValue(prev => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add inputValue to data array
    setData(prev => [...prev, inputValue]);

    // Reset the form
    setInputValue({
      name: "",
      place: "",
    });
  };

  const { name, place } = inputValue;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />

        <label>Place</label>
        <input
          type="text"
          value={place}
          onChange={(e) => handleChange(e, "place")}
        />

        <button type="submit">Submit</button>
      </form>

      {/* Display the submitted entries */}
      <h3>Submitted Data:</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name} from {item.place}</li>
        ))}
      </ul>
      <AgeCalculator/>
    </div>
    
  );
}

export default App;
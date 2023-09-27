import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [yearOfBirth, setYearOfBirth] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    const birthYear = parseInt(yearOfBirth);
    const calculatedAge = currentYear - birthYear;
    setAge(`Olá ${name}, você tem ${calculatedAge} anos.`);
  };

  return (
    <div className="App">
      <h1>Descubra sua idade</h1>
      <div className="input-container">
        <label className="input-label">
          Digite seu nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
        </label>

        <label className="input-label">
          Digite o ano que você nasceu:
          <input
            type="text"
            value={yearOfBirth}
            onChange={(e) => setYearOfBirth(e.target.value)}
            className="input-field"
          />
        </label>
      </div>

      <button onClick={calculateAge} className="calculate-button">
        Descobrir idade
      </button>
      {age && <p>{age}</p>}
    </div>
  );
}

export default App;

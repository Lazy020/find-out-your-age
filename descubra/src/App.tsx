import React, { useState } from 'react';
import './App.css';

function NameInput({ name, setName }) {
  return (
    <label className="input-label">
      Digite seu nome:
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
    </label>
  );
}

function YearOfBirthInput({ yearOfBirth, setYearOfBirth }) {
  return (
    <label className="input-label">
      Digite o ano que você nasceu:
      <input
        type="number"
        value={yearOfBirth}
        onChange={(e) => setYearOfBirth(e.target.value)}
        className="input-field"
      />
    </label>
  );
}

function AgeDisplay({ age }) {
  if (age) {
    return <p>{age}</p>;
  }
  return null;
}

function App() {
  const [name, setName] = useState('');
  const [yearOfBirth, setYearOfBirth] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    if (name && yearOfBirth) {
      const currentYear = new Date().getFullYear();
      const birthYear = parseInt(yearOfBirth);
      const calculatedAge = currentYear - birthYear;
      setAge(`Olá ${name}, você tem ${calculatedAge} anos.`);
    } else {
      setAge('');
    }
  };

  return (
    <div className="App">
      <h1>Descubra sua idade</h1>
      <div className="input-container">
        <NameInput name={name} setName={setName} />
        <YearOfBirthInput yearOfBirth={yearOfBirth} setYearOfBirth={setYearOfBirth} />
      </div>
      <br/>
      <button onClick={calculateAge} className="calculate-button">
        Descobrir idade
      </button>
      <AgeDisplay age={age} />
    </div>
  );
}

export default App;

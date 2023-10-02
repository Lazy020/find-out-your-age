import React, { useState } from 'react';

function App() {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [idade, setIdade] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    const idadeCalculada = hoje.getFullYear() - nascimento.getFullYear();
    setIdade(idadeCalculada);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required/>
        </label>
        <label>
          Data de Nascimento:
          <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required/>
        </label>
        <input type="submit" value="Enviar" />
      </form>
      {idade && (
        <div>
          <p>Nome: {nome}</p>
          <p>Idade: {idade}</p>
        </div>
      )}
    </div>
  );
}

export default App
// src/components/AddDataForm.js
import React, { useState } from 'react';

function AddDataForm({ onAddData }) {
  const [data, setData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.trim()) {
      onAddData(data); // Função para enviar os dados para a blockchain
      setData('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-data-form">
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Insira o dado do bloco"
      />
      <button type="submit">Adicionar ao Blockchain</button>
    </form>
  );
}

export default AddDataForm;

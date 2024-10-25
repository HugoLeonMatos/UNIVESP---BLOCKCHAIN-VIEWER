// src/App.js
import React, { useState } from 'react';
import AddDataForm from './components/AddDataForm';
import BlockchainViewer from './components/BlockchainViewer';
import styles from './App.css';

function App() {
  const [blocks, setBlocks] = useState([
    { index: 1, hash: '0x123', prevHash: null, date: '2024-10-10', data: 'Bloco inicial' }
  ]);

  const addBlock = (data) => {
    const prevBlock = blocks[blocks.length - 1];
    const newBlock = {
      index: blocks.length + 1,
      hash: `0x${Math.floor(Math.random() * 1000000)}`,
      prevHash: prevBlock.hash,
      date: new Date().toISOString().split('T')[0],
      data
    };
    setBlocks([...blocks, newBlock]);
  };

  return (
    <div className="App">
      <h1>Interaja com a Blockchain</h1>
      <AddDataForm onAddData={addBlock} />
      <BlockchainViewer blocks={blocks} />
    </div>
  );
}

export default App;

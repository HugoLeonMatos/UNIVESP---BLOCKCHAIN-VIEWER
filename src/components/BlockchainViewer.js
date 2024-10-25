// src/components/BlockchainViewer.js
import React from 'react';
import './BlockchainViewer.css';

function BlockchainViewer({ blocks }) {
  return (
    <div className="blockchain-viewer">
      {blocks.map((block) => (
        <div key={block.index} className="block">
          <h3>Bloco {block.index}</h3>
          <p><strong>Hash:</strong> {block.hash}</p>
          <p><strong>Hash Anterior:</strong> {block.prevHash || 'N/A'}</p>
          <p><strong>Data:</strong> {block.date}</p>
          <p><strong>Dado:</strong> {block.data}</p>
        </div>
      ))}
    </div>
  );
}

export default BlockchainViewer;


import React from 'react';
import './App.css';
import Web3 from 'web3';
import { BlockHeader, Block } from 'web3-eth' // ex. package types

const web3 = new Web3();

export const App: React.FC = () => {
  console.log("The web3 obj", web3)
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Intro to web 3</h1>
      </header>
      <main>
        <h2>This will be my testing center for web 3</h2>
      </main>
    </div>
  );
}


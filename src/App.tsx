import React from "react";
import "./App.css";
import Web3 from "web3";

export const App: React.FC = () => {
  const web3 = window.ethereum
    ? new Web3(Web3.givenProvider || "ws://localhost:8545")
    : undefined;

  console.log(web3);
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
};

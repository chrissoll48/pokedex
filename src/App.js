import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello Pikachu! Edit <code>src/App.js</code> and save to reload.
        </h1>
        <p> Smile you are in qteen </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

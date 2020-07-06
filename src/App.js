import React from 'react';
import logo from './logo.svg';
import './App.css';
import DarkModeToggle from "./DarkMode";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Swith Theme
        </p>
        <DarkModeToggle />
      </header>
    </div>
  );
}

export default App;

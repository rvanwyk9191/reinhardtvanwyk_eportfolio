import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bio from './Bio.js';
import Navigation from './Navigation.js'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <header className="App-header">
        <Bio />
      </header>
    </div>
  );
}

export default App;

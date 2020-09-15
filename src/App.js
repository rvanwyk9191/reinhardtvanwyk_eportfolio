import React from 'react';
import './App.css';
import Navigation from './structural/Navigation.js'
import {
    BrowserRouter as Router
} from "react-router-dom";
import RouterSwitch from './structural/RouterSwitch.js';

function App() {
  return (
    <div className="App">
        <Router>
          <Navigation/>
          <header className="App-header">
              <RouterSwitch />
          </header>
        </Router>
    </div>
  );
}

export default App;

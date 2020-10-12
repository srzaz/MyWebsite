import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Stephen Zazueta: A Website</h1>
      </header>
      <p>My name is Stephen and I love to code.</p>

      <hr />
      <Projects />
    </div>
  );
}

export default App;
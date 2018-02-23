import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Puzzle.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <Square symbols={[1,2,3,4,]} value={1}>
      </Square>
      </div>
    );
  }
}

export default App;

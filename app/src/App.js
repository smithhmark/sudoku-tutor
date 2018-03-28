import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tutor from './Tutor.js'

let examplePuzzle = [
        undefined,undefined,undefined, 2,6,undefined, 7,undefined,1,
        6,8,undefined, undefined,7,undefined, undefined,9,undefined,
        1,9,undefined, undefined,undefined,4, 5,undefined,undefined,

        8,2,undefined, 1,undefined,undefined, undefined,4,undefined,
        undefined,undefined,4, 6,undefined,2, 9,undefined,undefined,
        undefined,5,undefined, undefined,undefined,3, undefined,2,8,

        undefined,undefined,9, 3,undefined,undefined, undefined,7,4,
        undefined,4,undefined, undefined,5,undefined, undefined,3,6,
        7,undefined,3, undefined,1,8, undefined,undefined,undefined,]

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
      <Tutor puzzle={examplePuzzle} />
      </div>
    );
  }
}

export default App;

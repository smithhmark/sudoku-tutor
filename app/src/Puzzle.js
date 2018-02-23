import React, { Component } from 'react';

//function Square(props) {
class Square extends Component {
  constructor(props) {
    super(props);
    this.symbols = props.symbols;
    this.state = {"value": props.value}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("handling change", event.target);
    this.setState({value: event.target.value});
  }

  render() {
    let opts = []
    for (let ii = 0; ii < this.symbols.length ; ii++) {
      opts.push(
        <option key={ii} value={this.symbols[ii]}>{this.symbols[ii]}</option>);
    }
    return <select 
      className="square" value={this.state.value} onChange={this.handleChange}>
        {opts}
      </select>;
  }
}

class Puzzle extends Component {
  constructor(props) {
    super(props);
    if (props.puzzle.length === 81) {
      this.symbolCnt = 9;
    } else if (props.puzzle.length === 16) {
      this.symbolCnt = 4;
    } else if (props.puzzle.length === 4) {
      this.symbolCnt = 2;
    }
    this.initial = props.puzzle;
    this.state = {
      initial: props.puzzle,
      puz: props.puzzle.slice(),
    };
    this.symbols = []
    for (let ii = 0; ii < this.symbolCnt; ii++) {
      this.symbols.push(ii)
    }
  }

  renderSquare(idx) {
    return <Square ></Square>
  }

  render() {
    return <table></table>
  }

}

export default Square

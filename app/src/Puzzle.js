import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);
    //console.log("Square props:", props);
    this.state = {
      value: props.value,
      symbols: props.symbols,
    };
    this.deltaCB = props.cb;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("Square handling change", event.target);
    const st = this.state;
    this.setState({
      value: event.target.value,
      symbols: st.symbols,
    });
    this.deltaCB(event.target.value);
  }

  render() {
    let opts = []
    opts.push(
        <option key={0} value={0}></option>);
    for (let ii = 1; ii < this.state.symbols.length ; ii++) {
      let val = this.state.symbols[ii]
      opts.push(
        <option key={ii} value={val}>{val}</option>);
    }
    const val = this.state.value;
    return <select 
      className="square" value={val} onChange={this.handleChange}>
        {opts}
      </select>;
  }
}

class Puzzle extends Component {
  constructor(props) {
    super(props);
    //console.log("Puzzle props:", props);
    if (props.puzzle.length === 81) {
      this.symbolCnt = 9;
    } else if (props.puzzle.length === 16) {
      this.symbolCnt = 4;
    } else if (props.puzzle.length === 4) {
      this.symbolCnt = 2;
    } else {
      this.symbolCnt = 2;
    }
    this.state = {
      initial: props.puzzle,
      puzzle: props.puzzle.slice(),
      symbols: [],
    };
    for (let ii = 0; ii < this.symbolCnt+1; ii++) {
      this.state.symbols.push(ii)
    }
  }

  renderSquare(idx) {
    return (
      <Square 
        key={idx}
        value={this.state.puzzle[idx]}
        symbols={this.state.symbols}
        cb={(v) => this.updateSquare(idx,v)}/>
    );
  }

  renderRow(row) {
    let data = [];
    for ( let ii = 0; ii < this.state.symbols.length; ii++) {
      let childidx = this.state.symbols.length * row + ii;
      data.push(<td key={ii}>{this.renderSquare(childidx)}</td>);
    }
    return data;
  }

  updateSquare(idx, newval) {
    console.log("Puzzle updating state");
    //console.log("  old:", this.state.puzzle[idx]);
    //console.log("  new:", newval);
    const st = this.state;
    let pz = st.puzzle.slice();
    pz[idx] = newval;
    this.setState({
      puzzle: pz,
      symbols: st.symbols,
      initial: st.initial,
    });
  }

  render() {
    let rows = [];
    for ( let ii = 0; ii < this.state.symbols.length; ii++) {
      rows.push(<tr key={ii}>{this.renderRow(ii)}</tr>);
    }

    return <table><tbody>{rows}</tbody></table>
  }

}

export default Puzzle

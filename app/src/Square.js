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

export default Square

import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);
    //console.log("Square props:", props);
    this.deltaCB = props.cb;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log("Square forwarding change, name:", event.target.name, 
      "value:", event.target.value);
    this.props.cb(parseInt(event.target.value, 10));
    //this.deltaCB(parseInt(event.target.value, 10));
  }

  render() {
    const dispVal = this.props.value.toString()
    let opts = []
    opts.push(
        <option key={0} value={(0).toString()}></option>);
    for (let ii = 1; ii < this.props.symbols.length ; ii++) {
      let val = this.props.symbols[ii]
      opts.push(
        <option key={ii} value={val.toString()}>{val}</option>);
    }
    return <select 
      className="square" value={dispVal} onChange={this.handleChange}>
        {opts}
      </select>;
  }
}

export default Square

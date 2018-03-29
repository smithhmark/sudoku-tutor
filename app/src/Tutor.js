import React, { Component } from 'react';
import { Button } from 'reactstrap';

import Puzzle from './Puzzle.js';

class Tutor extends Component {
  constructor(props) {
    super(props);
    let op = []
    for (let ii = 0; ii < props.puzzle.length; ii++) {
      if (props.puzzle[ii]) {
        op.push(props.puzzle[ii])
      } else {
        op.push(0)
      }
    }

    this.state = {
      origPuzzle: op,
      puzzle: op.slice(),
    }
    this.reset = this.resetPuzzle.bind(this);
    this.setSquare = this.setSquare.bind(this);
  }
  render() {
    const puzzle = this.state.puzzle;
    return (
      <div>
        <div className='puzzle-controller'>
          <div>I control the puzzle</div>
          <div>
            <Button color="warning" 
              onClick={() => this.reset()}>Restart Puzzle</Button>
          </div>
        </div>
        <div className='puzzle-board'>
          <Puzzle puzzle={puzzle} 
              updateSquare={(i,v)=> this.setSquare(i,v)}/>
        </div>
      </div>
    )
  }

  setSquare(idx, newval) {
    console.log("Tutor.setSquare(",idx,",",newval,")")
    const op = this.state.origPuzzle;
    let pz = this.state.puzzle.slice();
    pz[idx] = newval;
    this.setState({
      origPuzzle: op,
      puzzle: pz,
    });
  }

  resetPuzzle() {
    console.log("rp this:", this)
    const op = this.state.origPuzzle;
    this.setState({
      origPuzzle: op,
      puzzle: op.slice(),
    });
  }
}

export default Tutor

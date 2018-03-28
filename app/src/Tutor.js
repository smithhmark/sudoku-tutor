import React, { Component } from 'react';
import {Button} from 'reactstrap'

import Puzzle from './Puzzle.js';

class Tutor extends Component {
  constructor(props) {
    super(props);
    this.puzzle = props.puzzle;
  }
  render() {
    return (
      <div>
        <div className='puzzle-controller'>
          I control the puzzle
          <Button>Logic Mode</Button>
        </div>
        <div className='puzzle-board hello'>
          <Puzzle puzzle={this.puzzle} />
        </div>
      </div>
    )
  }
}

export default Tutor

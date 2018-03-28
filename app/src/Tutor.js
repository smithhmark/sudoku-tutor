import React, { Component } from 'react';

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
        </div>
        <div className='puzzle-board hello'>
          <Puzzle puzzle={this.puzzle} />
        </div>
      </div>
    )
  }
}

export default Tutor

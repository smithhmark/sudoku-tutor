import React, { Component } from 'react';

import Square from './Square';

class Puzzle extends Component {
  constructor(props) {
    super(props);
    //console.log("Puzzle props:", props);
    if (props.puzzle.length === 81) {
      this.symbolCnt = 9;
      this.boxes = [
        new Set([0,1,2,9,10,11,18,19,20, ]),
        new Set([3,4,5,12,13,14,21,22,23, ]),
        new Set([6,7,8,15,16,17,24,25,26 ]),
        new Set([27,28,29,36,37,38,45,46,47, ]),
        new Set([30,31,32,39,40,41,48,49,50, ]),
        new Set([33,34,35,42,43,44,51,52,53, ]),
        new Set([54,55,56,63,64,65,72,73,74, ]),
        new Set([57,58,59,66,67,68,75,76,77, ]),
        new Set([60,61,62,69,70,71,78,79,80 ]),
      ];
      this.boxsz = 4;
      this.boxcnt = 3;
      this.darkened = new Set([0, 2,4,6,8]);
    } else if (props.puzzle.length === 16) {
      this.symbolCnt = 4;
      this.boxes = [
        new Set([0,1,4,5, ]),
        new Set([2,3,6,7, ]),
        new Set([8,9, 12,13]),
        new Set([10, 11, 14,15]),
      ];
      this.boxsz = 2;
      this.boxcnt = 2;
      this.darkened = new Set([0, 3,]);
    } else if (props.puzzle.length === 4) {
      this.symbolCnt = 2;
      this.boxes = [
        [0],[1],[2],[3],
      ];
      this.boxsz = 1;
      this.boxcnt = 1;
      this.darkened = new Set([0, 3,]);
    } else {
      this.symbolCnt = 2;
    }
    this.state = {
      puzzle: props.puzzle,
      symbols: [],
    };
    for (let ii = 0; ii < this.symbolCnt+1; ii++) {
      this.state.symbols.push(ii)
    }
  }

  renderBox(boxrow, boxcol) {
    const boxid = (this.boxcnt * boxrow) + boxcol
    //console.log("rendering box:", boxrow, boxcol)
    if (this.darkened.has(boxid)) {
      // style box appropriately
      return (
        <div style={{backgroundColor:'gray'}}>
          <table><tbody>
            {this.renderBoxSquares(boxrow,boxcol)}
          </tbody></table>
        </div>)
    } else {
      return (
        <table><tbody>
          {this.renderBoxSquares(boxrow,boxcol)}
        </tbody></table>
      )
    }
  }

  renderBoxSquares(boxrow, boxcol) {
    //console.log("rendering Squares box:", boxrow, boxcol)
    let rows = []
    for (let ii = 0 ; ii < this.boxcnt ; ii++) {
      let row = []
      for (let jj = 0 ; jj < this.boxcnt ; jj++) {
        const sqrrow = boxrow * this.boxcnt + ii
        const sqrcol = boxcol * this.boxcnt + jj
        const idx = sqrrow * this.symbolCnt + sqrcol
        const val = this.props.puzzle[idx]
        row.push(
          <td key={jj}>
            <Square
              symbols={this.state.symbols}
              value={val}
              cb={(v) => this.props.updateSquare(idx,v)}/>
          </td>);
      }
      rows.push(<tr key={ii}>{row}</tr>);
    }
    return rows
  }

  renderBoxRow(row) {
    //console.log("render box row:", row);
    let data = [];
    for ( let ii = 0; ii < this.boxcnt; ii++) {
      data.push(<td key={ii}>{this.renderBox(row, ii)}</td>);
    }
    return data;
  }

  updateSquare(idx, newval) {
    console.log("Puzzle updating state at", idx, "to", newval);
    console.log("  old:", this.state.puzzle[idx]);
    //console.log("  new:", newval);
    const st = this.state;
    let pz = st.puzzle.slice();
    pz[idx] = newval;
    this.setState({
      puzzle: pz,
      symbols: st.symbols,
    });
  }

  render() {
    let rows = [];
    for ( let ii = 0; ii < this.boxcnt; ii++) {
      rows.push(<tr key={ii}>{this.renderBoxRow(ii)}</tr>);
    }
    return <table><tbody>{rows}</tbody></table>
  }
}

export default Puzzle

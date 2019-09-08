import React, { Component } from 'react';
import {BOARD_SIZE} from '../constants.js';
import CheckersBoardSquare from './CheckersBoardSquare'
import CheckersBoardRow from './CheckersBoardRow/CheckersBoardRow'

class CheckersBoard extends Component {
  render() {
    const rows = [];
    let tempRowContent = [];
    this.props.squares.forEach((square, index) => {
      tempRowContent.push((
        <CheckersBoardSquare square={ square }/>
      ));
      const isLastSquareInRow = (index + 1) % BOARD_SIZE === 0 
      if (isLastSquareInRow) {
        rows.push((
          <CheckersBoardRow rowContent={ tempRowContent }/>
        ));
        tempRowContent = [];
      }
    });
    return (
      <div className="CheckersBoard"> 
        <h1>Checkers Board</h1>
        <div className="Board" style={ boardStyle }>
          { rows }
        </div>
      </div>
    );
  }
}

const boardStyle =  {
  display: 'inline-block',
  margin: '0 auto',
  border: '1px solid black',
  boxSizing: 'border-box'
}

export default CheckersBoard;

import React, { Component } from 'react';
import {BOARD_SIZE} from '../constants.js';
import CheckersBoardSquare from './CheckersBoardSquare'
import CheckersBoardRow from './CheckersBoardRow/CheckersBoardRow'

class CheckersBoard extends Component {
  render() {
    let tempRow = [];
    const rows = [];
    this.props.squares.forEach((square, index) => {
      const squareTemplate = (
        <CheckersBoardSquare square={square} key={index}/>
      );
      tempRow.push(squareTemplate);
      const nextIndex = index + 1;     
      if (nextIndex % BOARD_SIZE === 0) {
        const rowTemplate = (
          <CheckersBoardRow items={ tempRow }/>
        );
        rows.push(rowTemplate);
        tempRow = [];
      }
    });
    return (
      <div className="CheckersBoard"> 
        <h1>Checkers Board</h1>
        <div className="Board" style={boardStyle}>
          { rows }
        </div> 
      </div>);
  }
}

const boardStyle =  {
  display: 'inline-block',
  margin: '0 auto',
  border: '1px solid black',
  boxSizing: 'border-box'
}

export default CheckersBoard;

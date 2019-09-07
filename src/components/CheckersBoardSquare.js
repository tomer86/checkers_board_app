import React, { Component } from 'react';
import CheckersSoldier from './CheckersSoldier';

class CheckersBoardSquare extends Component {
  render() {
    const {hasSoldier} = this.props.square;
    const soldier = (<CheckersSoldier/>);
    return (
        <div className="CheckersBoardSquare" style={squareStyle}>
          {hasSoldier ? soldier: ''}
        </div>
    );
  }
}
const squareStyle = {
  width: '50px',
  height: '50px',
  boxSizing: 'border-box'
}
export default CheckersBoardSquare;

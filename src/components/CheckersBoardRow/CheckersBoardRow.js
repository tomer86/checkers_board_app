import React, { Component } from 'react';
import './CheckersBoardRow.css';

class CheckersBoardRow extends Component {
  render() {
    return (
        <div className="CheckersBoardRow"> { this.props.rowContent } </div>
    );
  }
}

export default CheckersBoardRow;

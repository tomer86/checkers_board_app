import React, { Component } from 'react';
import './App.css';
import CheckersForm from './components/CheckersForm';
import CheckersBoard from './components/CheckersBoard';
import {BOARD_SIZE} from './constants.js';

class App extends Component {
  constructor() {
    super();
    this.state = this.initState();
    this.initState.bind(this);      
    this.onAddSoldier.bind(this);
    this.onRemoveSoldier.bind(this);
  }
  onAddSoldier({ row,col }) {
    this.toggoleSoldier({ row, col, hasSoldier: true });
  }
  onRemoveSoldier({ row,col }) {
    this.toggoleSoldier({ row, col, hasSoldier: false });
  }
  toggoleSoldier({ row, col, hasSoldier }) {
    if (row !== null && col !== null && row < BOARD_SIZE && col < BOARD_SIZE) {
      const { squares } = this.state;
      const index = (row * BOARD_SIZE) + col;
      squares[index].hasSoldier = hasSoldier;
      this.setState({ ...squares });
    }
  }
  initState() {
    const squares = []
    for (let i = 0; i < (BOARD_SIZE*BOARD_SIZE); i++) {
      squares.push({ hasSoldier: false });
    }
    return { squares };   
  }
  render() {
    return (
      <div className="App">
        <CheckersForm onAddSoldier={ this.onAddSoldier.bind(this) }
                      onRemoveSoldier={ this.onRemoveSoldier.bind(this) }/>
        <CheckersBoard squares={ this.state.squares }/>
      </div>
    );
  }
}

export default App;

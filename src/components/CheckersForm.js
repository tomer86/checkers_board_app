import React, { Component } from 'react';
import {BOARD_SIZE} from '../constants';

class CheckersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row: null,
      col: null
    };
    this.handleRowChange = this.handleRowChange.bind(this);
    this.handleColChange = this.handleColChange.bind(this);
    this.onAddSoldier = this.onAddSoldier.bind(this);
    this.onRemoveSoldier = this.onRemoveSoldier.bind(this);
  }
  handleRowChange({ target }) {
    this.setState({row: target.type === 'number' ? parseInt(target.value) : null});
  }
  handleColChange({ target }) {
    this.setState({col: target.type === 'number' ? parseInt(target.value) : null});
  }
  onAddSoldier() {
    this.props.onAddSoldier(this.state)
  }
  onRemoveSoldier() {
    this.props.onRemoveSoldier(this.state)
  }
  render() {
    const { row, col } = this.state;
    const minIndex = 0;
    const maxIndex = BOARD_SIZE - 1; 
    return (
        <div className="CheckersForm">
          <h1>Add/Remove a Soldier</h1>
          <div>
            <label for="row">Enter row number ({ minIndex } - { maxIndex }): </label>
            <input value={ row } onChange={ this.handleRowChange }
                  type="number" name="row" min={ minIndex } max={maxIndex}/>
          </div>
          <div>
            <label for="col">Enter column number ({ minIndex } - { maxIndex }): </label>
            <input value={ col } onChange={ this.handleColChange }
                  type="number" name="col" min={ minIndex } max={ maxIndex }/>
          </div>
          <div>
            <button onClick={ this.onAddSoldier }>Add Soldier</button>
            <button onClick={ this.onRemoveSoldier }>Remove Soldier</button>
          </div>
        </div>
    );
  }
}
const formStyle = {

};
export default CheckersForm;

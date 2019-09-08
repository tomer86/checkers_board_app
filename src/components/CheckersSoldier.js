import React, { Component } from 'react';

class CheckersSoldier extends Component {
  render() {
    return (
        <div className="Soldier" style={ soldiereStyle }></div>
    );
  }
}

const soldiereStyle = {
  display: 'inline-block',
  padding: '12px',
  marginTop: '12px',
  border: '1px solid darkgray',
  background: 'white',
  borderRadius: '50%'
}
export default CheckersSoldier;

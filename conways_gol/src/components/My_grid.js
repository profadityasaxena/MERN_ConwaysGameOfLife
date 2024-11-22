// FILE: components/My_grid.js
import React, { Component } from 'react';
import './My_grid.css';

class MyGrid extends Component {
  handleCellClick = (rowIndex, cellIndex) => {
    console.log(`Clicked cell at column ${cellIndex}, row ${rowIndex}`);
    // You can also update the state or perform other actions here
  };

  render() {
    const { columns, rows, gridFull } = this.props;

    // Render the grid using the gridFull prop
    return (
      <div>
        <div className="grid">
          {gridFull.map((row, rowIndex) => (
            <div key={rowIndex} className="grid-row">
              {row.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  className="grid-cell"
                  onClick={() => this.handleCellClick(rowIndex, cellIndex)}
                  title={`Row: ${rowIndex}, Column: ${cellIndex}`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MyGrid;
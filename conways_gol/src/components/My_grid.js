// FILE: components/My_grid.js
import React, { Component } from 'react';
import './My_grid.css';

class MyGrid extends Component {
  handleCellClick = (rowIndex, cellIndex) => {
    const newGrid = this.props.gridFull.map((row, rIdx) =>
      row.map((cell, cIdx) => {
        if (rIdx === rowIndex && cIdx === cellIndex) {
          return cell === 1 ? 0 : 1; // Toggle cell state
        }
        return cell;
      })
    );
    this.props.updateGrid(newGrid); // Call the updateGrid function passed as a prop
  };

  render() {
    const { gridFull } = this.props;

    return (
      <div className="my-grid-container">
        <div className="grid">
          {gridFull.map((row, rowIndex) => (
            <div key={rowIndex} className="grid-row">
              {row.map((cell, cellIndex) => (
                <div
                  key={cellIndex}
                  className={`grid-cell ${cell === 1 ? 'grid-cell-alive' : ''}`}
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
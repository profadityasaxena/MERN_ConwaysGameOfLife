// FILE: components/My_game.js
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './My_game.css';
import My_grid from './My_grid';
import My_ControlPanel from './My_ControlPanel';

class My_game extends Component {
  constructor(props) {
    super(props);
    const rows = 10;
    const columns = 20;
    this.state = {
      speed: 60, // Default to 60 generations per minute
      rows: rows,
      columns: columns,
      generation: 0,
      gridFull: Array(rows).fill().map(() => Array(columns).fill(0)) // Initialize with 0
    };
    this.intervalId = null;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: parseInt(value) });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { rows, columns } = this.state;
    this.setState({
      gridFull: Array(rows).fill().map(() => Array(columns).fill(0)), // Initialize with 0
      generation: 0
    });
  };

  updateGrid = (newGrid) => {
    this.setState({ gridFull: newGrid });
  };

  startGame = () => {
    if (!this.intervalId) {
      const interval = 60000 / this.state.speed; // Calculate interval in milliseconds
      this.intervalId = setInterval(this.nextGeneration, interval);
    }
  };

  stopGame = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };

  resetGame = () => {
    this.stopGame();
    const { rows, columns } = this.state;
    this.setState({
      gridFull: Array(rows).fill().map(() => Array(columns).fill(0)), // Initialize with 0
      generation: 0
    });
  };

  nextGeneration = () => {
    const { gridFull, rows, columns } = this.state;
    const newGrid = gridFull.map((row, rIdx) =>
      row.map((cell, cIdx) => {
        const neighbors = this.countNeighbors(gridFull, rIdx, cIdx);
        if (cell === 1) {
          if (neighbors < 2 || neighbors > 3) {
            return 0; // Cell dies
          }
          return 1; // Cell lives
        } else {
          if (neighbors === 3) {
            return 1; // Cell becomes alive
          }
          return 0; // Cell remains dead
        }
      })
    );
    this.setState((prevState) => ({
      gridFull: newGrid,
      generation: prevState.generation + 1
    }));
  };

  countNeighbors = (grid, x, y) => {
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],         [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];
    return directions.reduce((count, [dx, dy]) => {
      const newX = x + dx;
      const newY = y + dy;
      if (newX >= 0 && newX < this.state.rows && newY >= 0 && newY < this.state.columns) {
        count += grid[newX][newY];
      }
      return count;
    }, 0);
  };

  render() {
    return (
      <div className="row">
        <div className="jumbotron custom-jumbotron">
          <div className="game-container">
            <h1 className="text-3xl font-bold text-gray-700">Conway's Game of Life</h1>
            <hr />
            <div style={{ height: '20px' }}></div>
            <div className="row d-flex justify-content-center align-items-center">
              <My_grid 
                gridFull={this.state.gridFull}
                rows={this.state.rows}
                columns={this.state.columns}
                updateGrid={this.updateGrid} // Pass the updateGrid function as a prop
              />
            </div>
            <My_ControlPanel 
              startGame={this.startGame}
              stopGame={this.stopGame}
              resetGame={this.resetGame}
            />
            <hr />
            <div style={{ height: '20px' }}></div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Speed (generations per minute):</label>
                <input
                  type="number"
                  name="speed"
                  value={this.state.speed}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Rows:</label>
                <input
                  type="number"
                  name="rows"
                  value={this.state.rows}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Columns:</label>
                <input
                  type="number"
                  name="columns"
                  value={this.state.columns}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div style={{ height: '20px' }}></div>
              <button type="submit" className="btn btn-primary">Set Grid</button>
            </form>
            <div style={{ height: '20px' }}></div>
            <hr />
            <div style={{ height: '20px' }}></div>
            <div className="row">
              <h3 className="text-xl font-bold text-gray-700">Generations Elapsed: {this.state.generation}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default My_game;
// FILE: components/My_game.js
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './My_game.css';
import My_grid from './My_grid';

class My_game extends Component {
  constructor(props) {
    super(props);
    const rows = 10;
    const columns = 64;
    this.state = {
      speed: 100,
      rows: rows,
      columns: columns,
      generation: 0,
      
      // Create a 2D array of size rows x columns filled with false values 
      gridFull: Array(rows).fill().map(() => Array(columns).fill(false))
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: parseInt(value) });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { rows, columns } = this.state;
    this.setState({
      gridFull: Array(rows).fill().map(() => Array(columns).fill(false)),
      generation: 0
    });
  };

  render() {
    return (
      <div className="row">
        <div className="jumbotron custom-jumbotron">
          <div className="game-container">
            <h1 className="text-3xl font-bold text-gray-700 ">Conway's Game of Life</h1>
            <div className="row d-flex justify-content-center align-items-center">
                <My_grid 
                    // Pass the gridFull, rows, and columns state as props to MyGrid
                    gridFull={this.state.gridFull}
                    rows={this.state.rows}
                    columns={this.state.columns}
                />
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Speed:</label>
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
              <button type="submit" className="btn btn-primary">Set Grid</button>
            </form>
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
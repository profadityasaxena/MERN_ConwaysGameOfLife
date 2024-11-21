// FILE: components/My_game.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './My_game.css';
import My_grid from './My_grid';

const My_game = () => {
  const [generation, setGeneration] = useState(0);

  return (
    <div className='row'>
        <div className="jumbotron custom-jumbotron">
        <div className="game-container">
            <h2>Welcome to Conway's Game of Life</h2>
            <div className='row'>
                <My_grid />
            </div>
            <div className='row'>               
                <h3>Generations: {generation}</h3>
            </div>
        </div>
    </div>
    </div>
    
  );
};

export default My_game;
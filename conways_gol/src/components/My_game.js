// FILE: components/My_game.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './My_game.css'; // Ensure this path is correct

const My_game = () => {
  return (
    <div className="jumbotron custom-jumbotron">
      <div className="game-container">
        <h2>Game Area</h2>
        {/* Add your game implementation here */}
      </div>
    </div>
  );
};

export default My_game;
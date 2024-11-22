// FILE: components/My_ControlPanel.js
import React from 'react';
import './My_ControlPanel.css';

const My_ControlPanel = ({ startGame, stopGame, resetGame }) => {
  return (
    <div className="control-panel">
      <button className="btn btn-secondary" onClick={startGame}>Start</button>
      <button className="btn btn-secondary" onClick={stopGame}>Stop</button>
      <button className="btn btn-secondary" onClick={resetGame}>Reset</button>
    </div>
  );
};

export default My_ControlPanel;
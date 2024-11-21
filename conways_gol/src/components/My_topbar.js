import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyTopbar = () => {
  return (
    <nav className="navbar navbar-light bg-light" style={{ boxShadow: '0 4px 4px -4px rgba(0,0,0,0.2)' }}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Conway's Game of Life</span>
      </div>
    </nav>
  );
};

export default MyTopbar;
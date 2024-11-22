import React from 'react';
import './My_topbar.css'; // Ensure this path is correct

const MyTopbar = () => {
  return (
    <nav className="navbar navbar-light bg-light" style={{ boxShadow: '0 4px 4px -4px rgba(0,0,0,0.2)' }}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">MATH is LIFE</span>
        <div >
            by Aditya Saxena
        </div>
      </div>
    </nav>
  );
};

export default MyTopbar;
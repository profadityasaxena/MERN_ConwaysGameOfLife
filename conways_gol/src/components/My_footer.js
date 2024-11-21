// FILE: components/My_footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './My_footer.css'; // Ensure this path is correct

const My_footer = () => {
  return (
    <footer className="footer bg-light text-center text-lg-start">
      <div className="container p-4">
        <span className="text-muted">© 2023 Conway's Game of Life</span>
      </div>
    </footer>
  );
};

export default My_footer;
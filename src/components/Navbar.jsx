// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4 justify-around transition delay-1000">
        <li><Link to="/" className="text-white rounded-lg hover:text-black hover:bg-white p-4">Home</Link></li>
        <li><Link to="/login" className="text-white rounded-lg hover:text-black hover:bg-white p-4">Login</Link></li>
        <li><Link to="/register" className="text-white rounded-lg hover:text-black hover:bg-white p-4">Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

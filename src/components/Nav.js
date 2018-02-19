import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav--list">
        <Link to="/" className="nav--link">All currencies</Link>
      </ul>
    </nav>
  );
};

export default Nav;

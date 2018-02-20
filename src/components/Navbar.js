import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { Nav, NavItem } from 'reactstrap';

const Navbar = () => {
  return (
    <Nav>
      <NavItem>
        <Link to="/" className="nav-link">All currencies</Link>
      </NavItem>
      <NavItem>
        <Link to="/favourites" className="nav-link">Favourites</Link>
      </NavItem>
    </Nav>
  );
};

export default Navbar;

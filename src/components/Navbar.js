import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { Nav, NavItem, Badge } from 'reactstrap';

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <NavItem>
          <Link to="/" className="nav-link">
            All currencies <Badge color="light">{this.props.currenciesCount}</Badge>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/favourites" className="nav-link">
            Favourites <Badge color="light">{this.props.favouritesCount}</Badge>
          </Link>
        </NavItem>
      </Nav>
    );
  }
};

const mapStateToProps = state => {
  return {
    currenciesCount: state.currencies.length,
    favouritesCount: state.favourites.length
  };
};

export default connect(mapStateToProps)(Navbar);

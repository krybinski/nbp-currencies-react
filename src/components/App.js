import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showAll } from './../actions/index';
import './App.css';

import { Container } from 'reactstrap';

import Home from './Home';
import Favourites from './Favourites';
import Navbar from './Navbar';

import { getAllCurrencies } from './../api/currencies';

class App extends Component {
  componentWillMount() {
    this.loadCurrencies();
  }

  loadCurrencies() {
    getAllCurrencies().then(axios.spread((tableA, tableB) => {
      const rates = [...tableA.data[0].rates, ...tableB.data[0].rates];
      this.props.showAll(rates);
    }));
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Container>
            <Route exact path="/" component={Home} />
            <Route path="/favourites" component={Favourites} />
          </Container>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    currencies: state.currencies
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    showAll: showAll
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

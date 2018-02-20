import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { Container } from 'reactstrap';

import Home from './Home';
import Favourites from './Favourites';
import Navbar from './Navbar';

const App = () => {
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

export default App;

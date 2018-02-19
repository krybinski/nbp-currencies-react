import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Nav from './Nav';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Nav />
        <div className="container">
          <Route exact path="/" component={Home} />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;

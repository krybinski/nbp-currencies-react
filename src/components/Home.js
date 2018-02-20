import React, { Component } from 'react';
import axios from 'axios';
import CurrenciesList from './../containers/CurrenciesList';

import { getAllCurrencies } from './../api/currencies';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      favourites: []
    };
    this.addToFavourite = this.addToFavourite.bind(this);
  }

  componentDidMount() {
    getAllCurrencies().then(axios.spread((tableA, tableB) => {
      const rates = [...tableA.data[0].rates, ...tableB.data[0].rates];
      this.setState({ currencies: rates });
    }));
  }

  addToFavourite(currency) {
    this.setState({ favourites: [...this.state.favourites, currency] });
  }

  render() {
    return (
      <section>
        <h1 className="section-heading">All currencies</h1>
        <div className="content-wrapper clearfix">
          <CurrenciesList currencies={this.state.currencies} addToFavourite={this.addToFavourite} />
        </div>
      </section>
    );
  }
};

export default Home;

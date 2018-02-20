import React, { Component } from "react";
import PropTypes from 'prop-types';
import CurrencyItem from './../components/CurrencyItem';
import { ListGroup } from 'reactstrap';

import './CurrenciesList.css';

class CurrenciesList extends Component {
  renderList() {
    if (!this.props.currencies.length) {
      return <div>No currencies</div>
    }

    return this.props.currencies.map(currency => {
      const btnDisabled = this.props.favourites
        ? this.props.favourites.includes(currency)
        : false;

      return (
        <CurrencyItem
          key={currency.code}
          currency={currency}
          clickCurrency={this.props.clickCurrency}
          content={this.props.content}
          btnDisabled={btnDisabled} />
      );
    });
  }

  render() {
    return <ListGroup>{this.renderList()}</ListGroup>;
  }
}

CurrenciesList.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object),
  favourites: PropTypes.arrayOf(PropTypes.object),
  clickCurrency: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired
}

export default CurrenciesList;

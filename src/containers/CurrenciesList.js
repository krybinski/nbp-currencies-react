import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button
} from 'reactstrap';
import './CurrenciesList.css';

class CurrenciesList extends Component {
  renderList() {
    const { currencies, toogleFavourite } = this.props;

    return currencies.map(currency => {
      return (
        <ListGroupItem
          key={currency.code} onClick={() => toogleFavourite(currency)} className="col-xs-12 col-sm-6 col-md-4">
          <ListGroupItemHeading>
            {currency.code} <Button size="sm" color="info">Add to favourite</Button>
          </ListGroupItemHeading>
          <ListGroupItemText>
            {currency.currency}
          </ListGroupItemText>
        </ListGroupItem>
      );
    });
  }

  render() {
    return <ListGroup>{this.renderList()}</ListGroup>;
  }
}

CurrenciesList.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.object).isRequired,
  toogleFavourite: PropTypes.func.isRequired
}

export default CurrenciesList;

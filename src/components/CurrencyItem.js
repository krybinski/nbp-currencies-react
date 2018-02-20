import React from 'react';
import PropTypes from 'prop-types';
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button
} from 'reactstrap';
import './CurrencyItem.css';

const CurrencyItem = ({ currency, clickCurrency, content, btnDisabled }) => {
  const color = btnDisabled ? 'default' : 'warning';

  return (
    <ListGroupItem className="col-xs-12 col-md-6 col-lg-4">
      <ListGroupItemHeading>
        {currency.code}
        <Button
          size="sm"
          color={color}
          onClick={() => clickCurrency(currency)}
          disabled={btnDisabled}>
          {content}
        </Button>
      </ListGroupItemHeading>
      <ListGroupItemText>
        <small>{currency.currency}</small>
      </ListGroupItemText>
      <ListGroupItemText>MID: {currency.mid}</ListGroupItemText>
    </ListGroupItem>
  )
};

CurrencyItem.propTypes = {
  currency: PropTypes.object.isRequired,
  clickCurrency: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  btnDisabled: PropTypes.bool
};

export default CurrencyItem;

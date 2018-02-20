import React from 'react';
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button
} from 'reactstrap';
import './CurrencyItem.css';

const CurrencyItem = ({ currency, clickCurrency, content }) => {
  return (
    <ListGroupItem className="col-xs-12 col-sm-6 col-md-4">
      <ListGroupItemHeading>
        {currency.code}
        <Button
          size="sm"
          color="info"
          onClick={() => clickCurrency(currency)}>
          {content}
        </Button>
      </ListGroupItemHeading>
      <ListGroupItemText>
        {currency.currency}
      </ListGroupItemText>
    </ListGroupItem>
  )
};

export default CurrencyItem;

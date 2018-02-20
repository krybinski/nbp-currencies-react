import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeFavourite, clearFavourites } from './../actions/index';
import CurrenciesList from './../containers/CurrenciesList';
import { Button } from 'reactstrap';
import './Favourites.css';

class Favourites extends Component {
  render() {
    return (
      <section>
        <h1 className="section-heading">Your favourites currencies</h1>
        <div className="btn-wrapper">
          <Button
            size="md"
            color="primary"
            onClick={this.props.clearFavourites}
            disabled={!this.props.currencies.length}>
            Clear the list
          </Button>
        </div>
        <div className="clearfix">
          <CurrenciesList
            currencies={this.props.currencies}
            clickCurrency={this.props.removeFavourite}
            content="Unfollow"  />
        </div>
      </section>
    );
  }
};

const mapStateToProps = state => {
  return {
    currencies: state.favourites
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    removeFavourite: removeFavourite,
    clearFavourites: clearFavourites
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);

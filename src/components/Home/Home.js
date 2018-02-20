import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFavourite } from './../../actions/index';
import CurrenciesList from './../../containers/CurrenciesList/CurrenciesList';

class Home extends Component {
  render() {
    return (
      <section>
        <h1 className="section-heading">All currencies</h1>
        <div className="clearfix">
          <CurrenciesList
            currencies={this.props.currencies}
            favourites={this.props.favourites}
            clickCurrency={this.props.addFavourite}
            content="Follow"  />
        </div>
      </section>
    );
  }
};

const mapStateToProps = state => {
  return {
    currencies: state.currencies,
    favourites: state.favourites
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addFavourite: addFavourite
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

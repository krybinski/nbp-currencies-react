import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFavourite } from './../actions/index';
import CurrenciesList from './../containers/CurrenciesList';

class Home extends Component {
  render() {
    return (
      <section>
        <h1 className="section-heading">All currencies</h1>
        <div className="clearfix">
          <CurrenciesList
            currencies={this.props.currencies}
            clickCurrency={this.props.addFavourite}
            content="Add to favourite"  />
        </div>
      </section>
    );
  }
};

const mapStateToProps = state => {
  return {
    currencies: state.currencies
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addFavourite: addFavourite
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

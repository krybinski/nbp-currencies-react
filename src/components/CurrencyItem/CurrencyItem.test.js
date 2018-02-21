/**
 * @jest-environment node
 */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import CurrencyItem from './CurrencyItem';

configure({ adapter: new Adapter() });

describe('<CurrencyItem /> component', () => {
  const currency = { code: 'PLN' };
  const content = 'Follow';
  const clickCurrency = (currency) => {};
  const btnDisabled = false;

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrencyItem
      currency={currency}
      content={content}
      clickCurrency={clickCurrency}
      btnDisabled={btnDisabled} />);
  });

  it('render component without crashes', () => {
    expect(wrapper.length).toEqual(1)
  });

  it('has h5 heading', () => {
    expect(wrapper.render().find('h5').length).toEqual(1);
  });

  it('has button with Follow text', () => {
    expect(wrapper.render().find('button').text()).toEqual('Follow');
  });

});

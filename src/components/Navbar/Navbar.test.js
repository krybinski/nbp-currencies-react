/**
 * @jest-environment node
 */

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import Navbar from './Navbar';

configure({ adapter: new Adapter() });

describe('<Navbar /> component', () => {
  const initialState = {
    currencies: [],
    favourites: []
  };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<Navbar store={store} />);
  });

  it('render component without crashes', () => {
    expect(wrapper.length).toEqual(1)
  });

});

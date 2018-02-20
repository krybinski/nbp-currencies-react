import React from 'react';
import ReactDOM from 'react-dom';
import Favourites from './Favourites';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Favourites />, div);
  ReactDOM.unmountComponentAtNode(div);
});

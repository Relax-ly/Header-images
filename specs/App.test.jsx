import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import Header from '../client/src/App';

describe('Header component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Header />, div);
  });

  it('when rendered should get a listing', () => {

  });
});

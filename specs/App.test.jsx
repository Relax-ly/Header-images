import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import axios from 'axios';
import Header from '../client/src/App';

jest.mock('axios');

beforeEach(() => {

});

describe('Header component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Header />, div);
  });

  it('when rendered should get a listing', () => {
    const getSpy = jest.spyOn(axios, 'get');
    const HeaderInstance = shallow(<Header />);
    expect(getSpy).toBeCalled();
  });

});

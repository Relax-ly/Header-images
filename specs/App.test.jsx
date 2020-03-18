import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import Header from '../client/src/App';

describe('Header component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Header />, div);
  });

  it('should contain method getListing', () => {
    const wrapper = shallow(<Header />);
    const getListing = wrapper.instance().getListing();
    expect(getListing).toBe(true);
  });
});

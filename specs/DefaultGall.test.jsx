import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import DefaultGall from '../client/src/DefaultGall.jsx';

describe('DefaultGall', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<DefaultGall />, div);
  });

  it('should have 5 childrent', () => {
    const wrapper = shallow(<DefaultGall />);
    const children = wrapper.children();
    expect(children.length).toBe(5);
  });

  it('should contain img element', () => {
    const wrapper = shallow(<DefaultGall />);
    const contains = wrapper.contains('img');
    expect(contains).toBe(true);
  });

  it('should have 5 img element', () => {
    const wrapper = shallow(<DefaultGall />);
    const img = wrapper.find('img');
    expect(img.length).toBe(5);
  });
});

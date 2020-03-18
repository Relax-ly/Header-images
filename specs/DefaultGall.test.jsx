import React from 'react';
import ReactDom from 'react-dom';
import DefaultGall from '../client/src/DefaultGall.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<Header />, div);
});

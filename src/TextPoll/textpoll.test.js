import React from 'react';
import { render ,screen } from '@testing-library/react';
 
import {TextPoll} from './textpoll';
 
describe('App', () => {
  test('renders App component', () => {
    render(<TextPoll />);
    screen.debug();
  });
});
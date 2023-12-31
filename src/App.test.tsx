import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

describe('HoverMenu', () => {
  it('is shown', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 899 });
    render(
      <App/>
    );
    
    const hoverMenuElements = screen.getByText(/home/i);
    
    expect(hoverMenuElements).toBeInTheDocument();
  });
});
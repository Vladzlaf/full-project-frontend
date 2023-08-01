import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HoverMenu from './hover-menu';

describe('HoverMenu', () => {
  it('is shown', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 899 });
    render(
      <Router>
        <HoverMenu elements={[]} />
      </Router>,
    );
    
    const hoverMenuElements = screen.getAllByText('Hover menu');
    
    expect(hoverMenuElements.length).toBeGreaterThan(0);
  });
});
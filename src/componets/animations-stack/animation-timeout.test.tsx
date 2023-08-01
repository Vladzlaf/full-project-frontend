import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimationTimeout from './animation-timeout';

describe('HoverMenu', () => {
  it('is shown', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 899 });
    render(
        <AnimationTimeout/>
    );
    
    expect(screen.getByText('setTimeOut')).toBeInTheDocument();
  });
});
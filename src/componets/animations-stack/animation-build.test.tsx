import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimationBuild from './animation-build';

describe('HoverMenu', () => {
  it('is shown', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 899 });
    render(
        <AnimationBuild />
    );
    
    expect(screen.getByText('build-in')).toBeInTheDocument();
  });
});
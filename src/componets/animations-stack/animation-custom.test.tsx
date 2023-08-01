import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimationCustom from './animation-custom';

describe('HoverMenu', () => {
  it('is shown', () => {
    render(
        <AnimationCustom/>
    );
    
    expect(screen.getByText('custom')).toBeInTheDocument();
  });
});
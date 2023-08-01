import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimationRequestFrame from './animation-request-frame';

describe('yjy', () => {
  it('is shown', () => {
    render(
        <AnimationRequestFrame/>
    );
    
    expect(screen.getByText('requestAnimationFrame')).toBeInTheDocument();
  });
});
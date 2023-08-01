import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from './app-router';

test('renders homepage when window width is greater than 899', () => {
  // Set the window width to simulate a larger screen
  window.innerWidth = 900;

  render(
    <MemoryRouter>
      <AppRouter />
    </MemoryRouter>
  );

  // Assert that the HomePage component is rendered
  const homePageElement = screen.getAllByText('Hover menu');
    
  expect(homePageElement.length).toBeGreaterThan(0);

  // Assert that the AnimationPage component is not rendered
  const animationDrawerElement = screen.queryByText(/открыть меню/i);
  expect(animationDrawerElement).not.toBeInTheDocument();
});

test('renders AnimationPage when window width is less than or equal to 899', () => {
  // Set the window width to simulate a smaller screen
  window.innerWidth = 700;

  render(
    <MemoryRouter>
      <AppRouter/>
    </MemoryRouter>
  );


  // Assert that the HomePage component is not rendered
  const homePageElement = screen.queryByText(/Animations for desktop/i);
  expect(homePageElement).not.toBeInTheDocument();
});

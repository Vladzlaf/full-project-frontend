import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorPage } from './err-page';

describe('ErrorPage', () => {
  it('renders error message and reloads page on button click', () => {
    // Create a mock for location.reload()
    const reloadMock = jest.fn();
    Object.defineProperty(window, 'location', {
      value: { reload: reloadMock },
      writable: true,
    });

    // Render the component
    render(<ErrorPage className="test-class" />);

    // Assert that error message is rendered
    const errorMessage = screen.getByText('Something went wrong...');
    expect(errorMessage).toBeInTheDocument();

    // Simulate button click
    const reloadButton = screen.getByText('reload page');
    fireEvent.click(reloadButton);

    // Assert that location.reload() is called
    expect(reloadMock).toHaveBeenCalled();
  });
});

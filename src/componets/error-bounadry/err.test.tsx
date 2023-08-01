import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CreateError } from './err';

describe('CreateError', () => {
  it('should throw an error when the button is clicked', () => {
    // Arrange
    const { getByText } = render(<CreateError />);
    
    // Act & Assert
    expect(() => fireEvent.click(getByText('Click and you will see'))).toThrowError(
      'shiiiiiiiiiiiit here we go again'
    );
  });

  it('should not throw an error when the button is not clicked', () => {
    // Arrange
    const { container } = render(<CreateError />);

    // Assert
    expect(container).toMatchSnapshot();
  });
});

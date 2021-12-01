import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Button from '../Button';

const mockOnClick = jest.fn();

describe('Button', () => {
  const setup = () => render(
    <Button
      onClick={mockOnClick}
      theme="primary"
      isWide
    >
      Button
    </Button>,
  );

  test('render primary theme correctly', () => {
    const { container } = setup();
    expect(container.innerHTML).toMatchSnapshot();
  });

  test('invokes onClic callback correctly', () => {
    const { container } = setup();
    fireEvent.click(container.querySelector('button'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});

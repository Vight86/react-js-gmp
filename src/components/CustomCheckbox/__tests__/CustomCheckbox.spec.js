import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CustomCheckbox from '../CustomCheckbox';

describe('CustomCheckbox', () => {
  const setup = () => render(<CustomCheckbox
    theme="primary"
    label="Test label"
  />);

  test('render checkbox with label', () => {
    const { container } = setup();
    expect(container.querySelector('span').innerHTML).toBe('Test label');
  });

  test('invokes clicks correctly', () => {
    const { container } = setup();
    expect(container.querySelector('input').checked).toBeFalsy();
    fireEvent.click(container.querySelector('input'));
    expect(container.querySelector('input').checked).toBeTruthy();
  });
});

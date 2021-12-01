import { render } from '@testing-library/react';
import React from 'react';
import CustomInput from '../CustomInput';

describe('CustomInput', () => {
  const setup = () => render(<CustomInput
    theme="primary"
    type="text"
  />);

  test('render primary theme correctly', () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });
});

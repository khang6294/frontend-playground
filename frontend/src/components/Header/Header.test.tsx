import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from 'components/Header';

jest.mock('../../utils', () => {
  const actualUtils = require.requireActual('../../utils');
  return {
    ...actualUtils,
  };
});

it('it should find a Header', () => {
  render(<Header />);
  expect(screen.getByText(/Header/i)).toBeInTheDocument();
});

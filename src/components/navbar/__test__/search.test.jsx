import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../Search';

describe('Search Component', () => {
  test('Renders Search Component', () => {
    const { queryByTestId } = render(<Search />);
    expect(queryByTestId('search-bar')).toBeTruthy();
  });
});

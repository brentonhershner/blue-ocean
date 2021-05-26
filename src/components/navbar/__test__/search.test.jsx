import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../Search';

describe('Search Component', () => {
  test('Renders Search Component', () => {
    const { queryByTestId } = render(<Search />);
    const searchBar = queryByTestId('search-bar');
    expect(searchBar).toBeTruthy();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../Search';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Search Component', () => {
  test('Renders Search Component', () => {
    const { queryByTestId } = render(
      <Router>
        <Switch>
          <Search />
        </Switch>
      </Router>
    );
    const searchBar = queryByTestId('search-bar');
    expect(searchBar).toBeTruthy();
  });
});

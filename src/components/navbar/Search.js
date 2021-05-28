import React, { useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment'
import { SearchContext } from '../../contexts/search-context';

const Search = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  return (
    <div>
      <InputBase
        data-testid="search-bar"
        placeholder="Search…"
        value={searchTerm}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => setSearchTerm(e.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </div>
  );
};

export default Search;

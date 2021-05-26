import React, { createContext, useState } from 'react';

export const SearchContext = createContext({
  searchTerm: '',
  searchResults: []
});

function SearchContextProvider(props) {
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ searchResults, setSearchResults ] = useState();

  return(
    <SearchContext.Provider value={{
      searchTerm,
      setSearchTerm,
      searchResults,
      setSearchResults
    }}>
        {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider;

import React, { createContext, useState } from 'react';

export const SearchContext = createContext({
  searchTerm: '',
  searchResults: []
});

function SearchContextProvider(props) {
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ searchResults, setSearchResults ] = useState();

  const [currentPhotoList, setCurrentPhotoList] = useState([]);
  const [currentAlbumList, setCurrentAlbumList] = useState([]);

  const [ searchFriend, setSearchFriend ] = useState('');
  // const [ friendResults, setFriendResults ] = useState([]);

  return(
    <SearchContext.Provider value={{
      searchTerm,
      setSearchTerm,
      searchResults,
      setSearchResults,
      currentPhotoList,
      setCurrentPhotoList,
      currentAlbumList,
      setCurrentAlbumList,
      searchFriend,
      setSearchFriend
      // friendResults,
      // setFriendResults
    }}>
        {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider;

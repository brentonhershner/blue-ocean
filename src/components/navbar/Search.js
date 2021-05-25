import React, { useState, useEffect /*, useContext */ } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
// import { PhotosContext } from '../../contexts/photos-context.js';
import fakePhotos from '../dummyData/fakePhotos';

// SEARCH BY
// 1. tags
// 2. users/friends

const Search = () => {
  const [ searchTerm, setSearchTerm ] = useState(null);
  const [ searchResults, setSearchResults ] = useState([]);
  // const { photos } = useContext(PhotosContext); // enable when `photos-context` is ready to use

  useEffect(() => {
    // upon `searchResults` change, send results to render view of new array
  }, [searchResults])

  function search() {
    const matches = fakePhotos[0].photos.filter(photo => photo.tags.includes(searchTerm.toLowerCase()))
    setSearchResults(matches)
  }



  return (
    <div>
      <InputBase
        data-testid="search-bar"
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchIcon onClick={() => search()}/>
    </div>
  );
};

export default Search;

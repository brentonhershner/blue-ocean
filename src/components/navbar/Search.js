import React, { useState, useEffect, useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
// import fakePhotos from '../dummyData/fakePhotos';
import { PhotosContext } from '../../contexts/photos-context.js';

const Search = () => {
  const [ searchTerm, setSearchTerm ] = useState(null);
  const [ searchResult, setSearchResult ] = useState([]);
  const { photos, setPhotos, updatePhoto } = useContext(PhotosContext);

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

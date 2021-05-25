import React, { useState, useEffect, useContext } from 'react';
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography'
// import { Link as RouterLink } from 'react-router-dom';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import fakePhotos from '../dummyData/fakePhotos';
import { PhotosContext } from '../../contexts/photos-context.js';

// Two options for Search field:
// 1. App Bar:  https://material-ui.com/components/app-bar/#app-bar-with-a-primary-search-field
// 2. Free Solo (currently using):  https://material-ui.com/components/autocomplete/#search-input

const Search = () => {
  const [ searchTerm, setSearchTerm ] = useState(null);
  const { photos, setPhotos, updatePhoto } = useContext(PhotosContext);

  return (
    <div>
      <InputBase
        data-testid="search-bar"
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchIcon />
    </div>
  );
};

export default Search;

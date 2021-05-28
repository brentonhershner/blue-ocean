import React, { useEffect, useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment'
// import { PhotosContext } from '../../contexts/photos-context.js';
import { SearchContext } from '../../contexts/search-context';
// import { UserContext } from '../../contexts/user-context';
// import { Link as RouterLink } from 'react-router-dom';
// import fakePhotos from '../dummyData/fakePhotos';

// SEARCH BY
// 1. tags
// 2. users/friends

const Search = () => {
  // const { photos } = useContext(PhotosContext) || [];
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const { searchResults, /*setSearchResults*/ } = useContext(SearchContext);
  // const { searchFriend, setSearchFriend } = useContext(SearchContext);
  // const { friendResults, setFriendResults } = useContext(SearchContext);


  useEffect(() => {
    // upon `searchResults` change, send results to render view of new array
    // console.log('searchResults:', searchResults)
  }, [searchResults])

  // function search() {
  //   // const matches = fakePhotos[0].photos.filter(photo => photo.tags.includes(searchTerm.toLowerCase()))
  //   // filter photos/albums
  //   const matches = photos.filter(photo => photo.tags.includes(searchTerm.toLowerCase()))
  //   setSearchResults(matches)
  //   // filter friends
  //   // const friendMatches = allUsers.filter(photo => photo.tags.includes(searchTerm.toLowerCase()))
  // }

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

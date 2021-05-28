import React, { useContext, useEffect } from 'react';
import { SearchContext } from '../../contexts/search-context';
import { PhotosContext } from '../../contexts/photos-context';
// import { UserContext } from '../../contexts/user-context';

function SearchFilter(props) {
  const { photos, albums } = useContext(PhotosContext);
  const { searchTerm } = useContext(SearchContext);
  const { setShownPhotos, setShownAlbums, currentAlbumPhotos } = props;
  // const { friends, pending, requested, allUsers } = useContext(UserContext);

  useEffect(() => {
    filterLists(searchTerm)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, currentAlbumPhotos])


  function filterLists(string) {
    let filteredPhotoList;
    let filteredAlbumList;
    let unfilteredPhotoList = currentAlbumPhotos.length > 0 ? currentAlbumPhotos : photos;

    if (!string) {
      setShownPhotos(unfilteredPhotoList);
      setShownAlbums(albums);
    } else {
      filteredPhotoList = unfilteredPhotoList.filter((photo) => (
        photo.tags.includes(searchTerm)
        // TODO: add filter by user
      ))
      setShownPhotos(filteredPhotoList)

      filteredAlbumList = albums.filter((album) => (
        album.tags.includes(searchTerm)
        // TODO: add filter by user
        || album.owner.toLowerCase() === searchTerm.toLowerCase()
      ))
      setShownAlbums(filteredAlbumList)
    }
  }

  return (
    <>
      {searchTerm ? <div>Showing results for: {searchTerm}</div> : null}
    </>
  )
}

export default SearchFilter;

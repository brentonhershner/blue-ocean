import React, { useContext, useEffect } from 'react';
import { SearchContext } from '../../contexts/search-context';
import { PhotosContext } from '../../contexts/photos-context';

function SearchFilter(props) {
  const { photos, albums } = useContext(PhotosContext);
  const { searchTerm } = useContext(SearchContext);
  const { setShownPhotos, setShownAlbums, currentAlbumPhotos } = props;

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
        photo.tags.includes(searchTerm.toLowerCase())
        // TODO: add filter by user
      ))
      setShownPhotos(filteredPhotoList)

      filteredAlbumList = albums.filter((album) => (
        album.tags.includes(searchTerm.toLowerCase())
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

import React, { useContext, useState } from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { PhotosContext } from '../../contexts/photos-context';
import GalleryTile from './GalleryTile';

function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [onSelect, setOnSelect] = useState(false);
    const { photos, setPhotos, updatePhoto } = useContext(PhotosContext);

  const handleSelectClick = () => {
    setOnSelect(!onSelect);
  }


return (
  <Paper>
      <Button onClick={handleSelectClick} size="small" variant="contained" color="primary">Select</Button>
    <GridList sx={{ width: 1 }} cols={5} rowheight={1/5}>
      {photos.map((item, index) => (
        // add onclick open photoviewer modal pass in index
        //
        <GridListTile key={index}>
          <GalleryTile onSelect={onSelect} index={index} url={item.url} title={item.title} />

        </GridListTile>
      ))}
    </GridList>
  </Paper>
)
}


export default Gallery;
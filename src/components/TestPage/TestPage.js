import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import Button from '@material-ui/core/Button';
import api from '../../api/api';
import ImageUploader from '../ImageUploader/ImageUploader';

const TestPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImageList();
  }, [])

  const getImageList = async () => {
    const imageList = await api.getImageList();
    setImages(imageList);
  }

  return (
    <div>
      <Typography variant="h2">
        TestPage
      </Typography>

      <ImageUploader images={images} setImages={setImages} />
      <GridList >
        {images.map((tile) => (
          <GridListTile key={tile.name} cols={tile.cols || 1}>
            <img src={`${tile.url}`} alt={tile} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}


export default TestPage;

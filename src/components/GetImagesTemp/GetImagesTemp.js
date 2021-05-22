import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import api from '../../api/api';

const staticPath = 'http://localhost:3001/images/';

const GetImageTemp = () => {

  const getImageList = async () => {
    const imageList = await api.getImageList();
    setImages(imageList);
  }

  useEffect(() => {
    getImageList();
  }, [])

  const [images, setImages] = useState([]);

  return (
    <div>
      <Typography variant="h2">
        Grid List!
      </Typography>
      <GridList >
        {images.map((tile) => (
          <GridListTile key={tile} cols={tile.cols || 1}>
            <img src={`${staticPath}${tile}`} alt={tile} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default GetImageTemp;

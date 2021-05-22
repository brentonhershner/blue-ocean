import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import api from '../../api/api';

const ImageTemp = ({src}) => {

  const getImageList = async () => {
    const imageList = await api.getImageList();
    console.log(imageList);

  }

  useEffect(() => {
    getImageList();
  }, [])

  return (
    <div>
      <Typography variant="h2">
        ImageTemp!
      </Typography>
      
    </div>
  );
}

export default ImageTemp;

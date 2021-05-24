import React, { useContext, useState } from 'react';

import Checkbox from '@material-ui/core/Checkbox';


const GalleryTile = (props) => {
  const[selected, setSelected] = useState(false);

  return(
    <>
    <img
      srcSet={props.url}
      alt={props.title}
      loading="lazy"
    />
    </>
  )
}
export default GalleryTile;
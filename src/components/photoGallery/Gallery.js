import React, { useContext, useState } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'

import { PhotosContext } from '../../contexts/photos-context';
import EditPhotosModal from './EditPhotosModal'


let styles = {
  gridListTile: {
    maxHeight: window.innerWidth / 4
  },
  button: {
    margin: "10px 5px",
  },
  paper: {
    position: 'absolute',
    width: 400,
    border: '2px solid #000',
  },
};

function Gallery(props) {
  const [showModal, setShowModal] = useState(false);
  const [onSelect, setOnSelect] = useState(false);
  const [selected, setSelected] = useState([]);


  const { classes,
    // children, className, ...other
  } = props;

  const { photos,
    // setPhotos,
    // updatePhoto
  } = useContext(PhotosContext);

  const handleSelectClick = () => {
    setOnSelect(!onSelect);
    setSelected([]);
  }

  const handlePhotoClick = (index) => {
    if (onSelect) {
      let newArr = selected.slice();
      if (newArr.includes(index)) {
        newArr.splice(newArr.indexOf(index), 1)
      } else {
        newArr.push(index)
      }
      setSelected(newArr);
    } else {
    }
  }

  const handleClose = () => {
    setShowModal(false)
  }
  const handleOpen = () => {
    setShowModal(true)
  }

  return (
  <Paper id="wrapper">
    <div style={{ height: 50, display:'flex', justifyContent:'flex-end', flexWrap: 'wrap' }}>
      <FormGroup className={classes.formGroup} row>
        {onSelect && selected.length > 0 ?
        <>
        <Button onClick={handleOpen} size="small" className={classes.button} variant="contained" color="primary">
          Edit
        </Button>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
            </>
            : null
          }
          <FormControlLabel
            control={<Switch onClick={handleSelectClick} color="primary" />}
            label="Select"
          />
        </FormGroup>
      </div>
      <GridList cols={4} component="div">
        {photos.map((item, index) => (
          // add onclick open photoviewer modal pass in index
          //
          <GridListTile className={classes.gridListTile} onClick={() => handlePhotoClick(index)} key={index} >
            <img style={selected.includes(index) ? { filter: 'brightness(1.8) opacity(0.61) saturate(1.8)' } : {}}
              srcSet={item.url}
              alt={item.title}
              loading="lazy"
            />
          </GridListTile>
      ))}
    </GridList>
    <EditPhotosModal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="Edit Photos"
        aria-describedby="Modal to edit photos"
        selected={selected}
    />
  </Paper>
)
}


export default withStyles(styles)(Gallery);
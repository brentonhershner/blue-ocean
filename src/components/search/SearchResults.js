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

// import { PhotosContext } from '../../contexts/photos-context';
import EditPhotosModal from '../photoGallery/EditPhotosModal'

import { SearchContext } from '../../contexts/search-context';


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

function SearchResults(props) {
  const { searchTerm } = useContext(SearchContext);
  const { searchResults } = useContext(SearchContext);

  // console.log('searchTerm in SearchResults.js:', searchTerm); // shows access to context
  // console.log('searchResults in SearchResults.js:', searchTerm); // shows access to context

  const [showModal, setShowModal] = useState(false);
  const [onSelect, setOnSelect] = useState(false);
  const [selected, setSelected] = useState([]);

  const { classes,
    // children, className, ...other
  } = props;

  // REPLACED BY searchResults
  // const { photos,
  //   // setPhotos,
  //   // updatePhoto
  // } = useContext(PhotosContext);

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
      <br/>
      <div>Search results:  #{searchTerm}</div>

      {/* SELECT/EDIT/DELETE */}
      <div style={{ height: 50, display:'flex', justifyContent:'flex-end', flexWrap: 'wrap' }}>
        <FormGroup className={classes.formGroup} row>
        {onSelect && selected.length > 0
          ? <div>
              <Button onClick={handleOpen} size="small" className={classes.button} variant="contained" color="primary">
                Edit
              </Button>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </div>
          : null
        }
          <FormControlLabel
            control={<Switch onClick={handleSelectClick} color="primary" />}
            label="Select"
          />
        </FormGroup>
      </div>

      {/* PHOTO GRID */}
      <GridList cols={4} component="div">
        {searchResults.map((item, index) => (
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

      {/* EDIT PHOTOS MODAL */}
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

export default withStyles(styles)(SearchResults);

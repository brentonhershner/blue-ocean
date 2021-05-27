import React, { useContext, useState } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import AddAlbumIcon from '@material-ui/icons/CreateNewFolder';
import IconButton from '@material-ui/core/IconButton';
import { PhotosContext } from '../../contexts/photos-context';
import EditPhotosModal from './EditPhotosModal'
import PhotoModal from '../PhotoView/PhotoModal';
import AlbumRow from '../albums/AlbumRow'
import CreateOrEditAlbumModal from '../albums/CreateOrEditAlbumModal';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';


let styles = {
  gridListTile: {
    maxHeight: window.innerWidth / 4,
  },
  button: {
    margin: "10px 5px",
  },
  paper: {
    maxHeight: 'max-content'
  },
};

function Gallery(props) {
  const hasPrivilege = false;

  const { photos,
    //albums,
    // setPhotos,
    // updatePhoto
  } = useContext(PhotosContext);
  const [showPhotoModal, setShowPhotoModal] = useState(null);
  const [showEditPhotosModal, setShowEditPhotosModal] = useState(false);
  const [onSelect, setOnSelect] = useState(false);
  const [selected, setSelected] = useState([]);
  const [shownPhotos, setShownPhotos] = useState(photos);
  const [showAlbumModal, setShowAlbumModal] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState({});

  //states for create/edit album modal
  const [albumTitle, setAlbumTitle] = useState('');
  const [albumDescription, setAlbumDescription] = useState('');
  const [albumPermision, setAlbumPermission] = useState(0);
  const [albumTags, setAlbumTags] = useState([]);
  const [albumSelected, setAlbumSelected] = useState([]);
  const [isAlbumCreate, setIsAlbumCreate] = useState(false);

  const { classes,
    // children, className, ...other
  } = props;


  const handleSelectClick = () => {
    setOnSelect(!onSelect);
    setSelected([]);
  };

  const handlePhotoClick = (index) => {
    if (onSelect) {
      let newArr = selected.slice();
      if (newArr.includes(index)) {
        newArr.splice(newArr.indexOf(index), 1);
      } else {
        newArr.push(index);
      }
      setSelected(newArr);
    } else {
      // console.log('set modal photo as', photos[index])
      setShowPhotoModal(photos[index]);
    }
  };

  const handleClose = () => {
    setShowEditPhotosModal(false)
    setShowAlbumModal(false)
  }
  const handleEidtPhotosOpen = () => {
    setShowEditPhotosModal(true)
  }

  const handleCreateAlbumOpen = () => {
    setAlbumTitle('')
    setAlbumDescription('')
    setAlbumPermission(0)
    setAlbumTags([])
    setAlbumSelected([])
    setIsAlbumCreate(true)
    setShowAlbumModal(true)
  }

  const removePhotosFromAlbum = () => {
    console.log('Deleting ' + JSON.stringify(selected) + ' from ' + currentAlbum.title);
  }

  return (
    <>
      <AlbumRow
        currentAlbum={currentAlbum}
        setCurrentAlbum={setCurrentAlbum}
        setShownPhotos={setShownPhotos}
        handleSelectClick={handleSelectClick}
        onSelect={onSelect}
        hasPrivilege={hasPrivilege}

        setShowAlbumModal={setShowAlbumModal}
        setAlbumTitle={setAlbumTitle}
        setAlbumDescription={setAlbumDescription}
        setAlbumPermission={setAlbumPermission}
        setAlbumTags={setAlbumTags}
        setIsAlbumCreate={setIsAlbumCreate}
      />
      <Paper id="wrapper" className={classes.paper}>
      {hasPrivilege ?
        <div
          style={{
            height: 50,
            display:'flex',
            justifyContent:'space-between',
            flexWrap: 'wrap'
          }}
        >
          <div>
            {onSelect && selected.length > 0
            ? currentAlbum.title
              ? <IconButton
                  onClick={() => removePhotosFromAlbum()}
                aria-label="new-album"
                >
                  <RemoveCircleOutlineIcon />
                </IconButton>
              : <IconButton
                  onClick={handleCreateAlbumOpen}
                  aria-label="new-album"
                >
                  <AddAlbumIcon />
                </IconButton>
            : null }
          </div>
          <FormGroup className={classes.formGroup} row>
            {onSelect && selected.length > 0
            ? <>
                <Button
                  onClick={handleEidtPhotosOpen}
                  size="small"
                  className={classes.button}
                  variant="contained"
                  color="primary"
                >
                  Edit
                </Button>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </>
            : null}
          <FormControlLabel
            control={
              <Switch
              size="small"
              checked={onSelect}
              onChange={handleSelectClick}
              color="primary"
              />
            }
            label="Select"
            />
          </FormGroup>
        </div>
      : null }
      <GridList cols={4} component="div">
        {shownPhotos.map((item, index) => (
          // add onclick open photoviewer modal pass in index
          //
          <GridListTile
            className={classes.gridListTile}
            onClick={() => handlePhotoClick(index)}
            key={index}
          >
            <img
              style={
                selected.includes(index)
                  ? { filter: "brightness(1.8) opacity(0.61) saturate(1.8)" }
                  : {}
              }
              srcSet={item.url}
              alt={item.title}
              loading="lazy"
            />
          </GridListTile>
      ))}
    </GridList>
    <EditPhotosModal
        open={showEditPhotosModal}
        onClose={handleClose}
        aria-labelledby="Edit Photos"
        aria-describedby="Modal to edit photos"
        selected={selected}
    />
  </Paper>
    <PhotoModal
        // alt={item.title}
        // srcSet={item.url}
        showModal={showPhotoModal}
        setShowModal={setShowPhotoModal}
      />
    <CreateOrEditAlbumModal
      open={showAlbumModal}
      onClose={handleClose}
      aria-labelledby="Create or edit album"
      aria-describedby="Modal to create albums"
      albumTitle={albumTitle}
      albumDescription={albumDescription}
      albumPermision={albumPermision}
      albumTags={albumTags}
      albumSelected={albumSelected}
      isAlbumCreate={isAlbumCreate}

      setAlbumTitle={setAlbumTitle}
      setAlbumDescription={setAlbumDescription}
      setAlbumPermission={setAlbumPermission}
      setAlbumTags={setAlbumTags}

      hasPrivilege={hasPrivilege}
    />
  </>
)
}

export default withStyles(styles)(Gallery);

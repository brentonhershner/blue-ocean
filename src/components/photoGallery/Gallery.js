import React, { useContext, useState, useEffect } from "react";
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
import EditPhotosModal from './EditPhotosModal'
import PhotoModal from '../PhotoView/PhotoModal';
import AlbumRow from '../albums/AlbumRow'
import CreateOrEditAlbumModal from '../albums/CreateOrEditAlbumModal';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import SearchFilter from './SearchFilter';
/*-------------------Context Imports-------------------*/
import { PhotosContext } from '../../contexts/photos-context';
import { UserContext } from '../../contexts/user-context';
import { SearchContext } from '../../contexts/search-context';

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

  const {
    myPhotos,
    friendsPhotos,
    publicPhotos,
    myAlbums,
    friendsAlbums,
    publicAlbums,
    // setPhotos,
    // updatePhoto
  } = useContext(PhotosContext);
  const { userType } = useContext(UserContext); // user context
  const { searchTerm, setSearchTerm } = useContext(SearchContext); // user context

  const [masterPhotos, setMasterPhotos] = useState([]);
  const [masterAlbums, setMasterAlbums] = useState([]);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [showEditPhotosModal, setShowEditPhotosModal] = useState(false);
  const [onSelect, setOnSelect] = useState(false);
  const [selected, setSelected] = useState([]);
  const [shownPhotos, setShownPhotos] = useState([]);
  const [shownAlbums, setShownAlbums] = useState([]);
  const [showAlbumModal, setShowAlbumModal] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState({});
  const [currentAlbumPhotos, setCurrentAlbumPhotos] = useState([]);

  //states for create/edit album modal
  const [albumTitle, setAlbumTitle] = useState('');
  const [albumDescription, setAlbumDescription] = useState('');
  const [albumPermission, setAlbumPermission] = useState(0);
  const [albumTags, setAlbumTags] = useState([]);
  const [albumSelected, setAlbumSelected] = useState([]);
  const [isAlbumCreate, setIsAlbumCreate] = useState(false);
  const [hasPrivilege, setHasPrivilege] = useState(false)

  const { classes,
    view, // render gallery view as = 'public', 'personal', 'shared'
    // children, className, ...other
  } = props;

  useEffect(() => {
  if( view === 'personal' || userType === 'admin' ) {
    setHasPrivilege(true);
    // setShownPhotos(myPhotos);
    // setShownAlbums(myAlbums);
  } else {
    setHasPrivilege(false);
    // if (view === 'shared') {
      // setShownPhotos(friendsPhotos);
      // setShownAlbums(friendsAlbums);
    // } else {
    //   setShownPhotos(publicPhotos);
    //   setShownAlbums(publicAlbums);
    }
  }, [view, userType])

  useEffect (()=>{
    if (view === 'personal') {
    setShownPhotos(myPhotos);
    setMasterPhotos(myPhotos);
    setShownAlbums(myAlbums);
    setMasterAlbums(myAlbums);
    } else if (view === 'shared') {
      setShownPhotos(friendsPhotos);
      setMasterPhotos(friendsPhotos);
      setShownAlbums(friendsAlbums);
      setMasterAlbums(friendsAlbums);
    } else {
      setShownPhotos(publicPhotos);
      setMasterPhotos(publicPhotos);
      setShownAlbums(publicAlbums);
      setMasterAlbums(publicAlbums);
    }
  },[view])



  useEffect(() => {
    setSearchTerm('');
  }, [view, setSearchTerm])

  useEffect(() => {
    if (onSelect) {
      handleSelectClick(); // turns off select when album is clicked
    }
  }, [searchTerm])

  // // FILTER PHOTOS BY VIEW
  // useEffect(() => {
  //   if (view === 'public') {
  //     setShownPhotos(photos);
  //   } else if (view === 'personal') {
  //     // const personalPhotos = photos.filter(photo => photo.ownerId === user.userId) // PROPER code, when userId 1 exists
  //     const personalPhotos = photos.filter(photo => photo.ownerId === 2)
  //     console.log(personalPhotos);
  //     setShownPhotos(personalPhotos);
  //   } else if (view === 'shared') {
  //     const friendIds = user.friends.map(friend => friend.userId); // map friend userIds to array
  //     const sharedPhotos = photos.filter(photo => {
  //       /* filter shared photos to user and friends Ids */
  //       // return friendIds.concat([user.userId]).includes(photo.ownerId); // PROPER CODE, when valid friend userId's exist
  //       return friendIds.concat([3]).includes(photo.ownerId); // filter shared photos to user and friends Ids
  //     })
  //     setShownPhotos(sharedPhotos);
  //   }
  // }, [view]) // update 'shownPhotos' when 'view' changes

  // useEffect(() => {
  //   if (currentAlbumPhotos.length > 0) {
  //     setShownPhotos(currentAlbumPhotos)
  //   } else {
  //     setShownPhotos(photos)
  //   }
  // }, [currentAlbumPhotos])

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
      setShowPhotoModal(shownPhotos[index]);
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

  const deleteSelected = () => {

    // API HERE!!!
    //api delete photos and pass in selected

    handleSelectClick()
  }

  return (
    <>
      <div style={{display: 'flex'}}>
        <h1 style={{magin: 0}}>
          {view === 'personal' ? 'My Photos'
        : view === 'shared' ? 'Friends\' Photos'
        : 'Public Photos'}</h1>
      </div>
      <SearchFilter
        setShownPhotos={setShownPhotos}
        setShownAlbums={setShownAlbums}
        currentAlbumPhotos={currentAlbumPhotos}
        masterPhotos={masterPhotos}
        masterAlbums={masterAlbums}
      />
      <AlbumRow
        currentAlbum={currentAlbum}
        setCurrentAlbum={setCurrentAlbum}
        setShownPhotos={setShownPhotos}
        handleSelectClick={handleSelectClick}
        onSelect={onSelect}
        hasPrivilege={hasPrivilege}
        masterPhotos={masterPhotos}

        setShowAlbumModal={setShowAlbumModal}
        setAlbumTitle={setAlbumTitle}
        setAlbumDescription={setAlbumDescription}
        setAlbumPermission={setAlbumPermission}
        setAlbumTags={setAlbumTags}
        setIsAlbumCreate={setIsAlbumCreate}
        shownAlbums={shownAlbums}
        shownPhotos={shownPhotos}
        setCurrentAlbumPhotos={setCurrentAlbumPhotos}
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
                <IconButton onClick={deleteSelected} aria-label="delete">
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
        shownPhotos={shownPhotos}
    />
  </Paper>
    <PhotoModal
        // alt={item.title}
        // srcSet={item.url}
        hasPrivilege={hasPrivilege}
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
      albumPermission={albumPermission}
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

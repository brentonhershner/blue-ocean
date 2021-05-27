import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';

import { PhotosContext } from '../../contexts/photos-context';
import Album from './Album';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'no-wrap',
    marginBottom: theme.spacing(1),
    overflowX: 'auto',
    '& > *': {
      margin: theme.spacing(1),
      minWidth: 100,
      // height: theme.spacing(16),
    },
    title: {
      fontSize: 14,
    },
    button: {
      margin: theme.spacing(4, 0)
    }
  },
}));

function AlbumRow (props) {
  const classes = useStyles();

  const { photos,
    albums
    // setPhotos,
    // updatePhoto
  } = useContext(PhotosContext);
  // const [currentAlbum, setCurrentAlbum] = useState({});
  // const [showModal, setShowModal] = useState(false);

  // const handleClose = () => {
  //   setShowAlbumModal(false)
  // }
  const handleEditAlbumOpen = () => {
    props.setIsAlbumCreate(false);
    props.setAlbumTitle(props.currentAlbum.title);
    props.setAlbumDescription(props.currentAlbum.description);
    props.setAlbumPermission(props.currentAlbum.permission);
    props.setAlbumTags(props.currentAlbum.tags);
    props.setShowAlbumModal(true)
  }

  const returnToAll = () => {
    props.setShownPhotos(photos);
    props.setCurrentAlbum({});
  }

  return (
    <Paper className={classes.root}>

      {props.currentAlbum.title ?
      <>
      <div style={{
        textAlign: 'start',
        width: '100%',
      }}>
      <Typography className={classes.title} gutterBottom component="h2">
        {props.currentAlbum.title}
      </Typography>
      <Typography variant="body2" component="p">
            {props.currentAlbum.description}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
            By&nbsp;{props.currentAlbum.owner}
      </Typography>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
        {props.hasPrivilege
        ?  <IconButton onClick={handleEditAlbumOpen} size="small" aria-label="delete">
            <EditIcon />
          </IconButton>
        :  <IconButton onClick={handleEditAlbumOpen} size="small" aria-label="delete">
            <InfoIcon />
          </IconButton>
        }
          <Button
            size="small"
            className={classes.button}
            onClick={returnToAll}
            variant="contained"
            color="secondary"
          >
              Exit
          </Button>
        </div>
      </div>
      </>
      : albums.map((item, index) => (
        <Album
          key={index}
          album={item}
          setCurrentAlbum={props.setCurrentAlbum}
          setShownPhotos={props.setShownPhotos}
          handleSelectClick={props.handleSelectClick}
          onSelect={props.onSelect}
          hasPrivilege={props.hasPrivilege}

          setShowAlbumModal={props.setShowAlbumModal}
          setAlbumTitle={props.setAlbumTitle}
          setAlbumDescription={props.setAlbumDescription}
          setAlbumPermission={props.setAlbumPermission}
          setAlbumTags={props.setAlbumTags}
          setIsAlbumCreate={props.setIsAlbumCreate}
        />
      ))}
    </Paper>
  );


};

export default AlbumRow
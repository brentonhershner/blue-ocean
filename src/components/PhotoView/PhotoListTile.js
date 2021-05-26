import React, { useState } from 'react';
import { Button, Container, Drawer, GridListTile, Modal, TextField, Paper, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import userPhotos from '/Users/gea/HR/hr-sea16/blue-ocean/src/dummyData/fakePhotos.js';

const photoInfo = userPhotos[0];
const photo = photoInfo.photos[0];

const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    flexGrow: 1,
    minWidth: 300,
    transform: 'translateZ(0)',
    // The position fixed scoping doesn't work in IE 11.
    // Disable this demo to preserve the others.
    '@media all and (-ms-high-contrast: none)': {
      display: 'none',
    },
  },
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    disaply: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '70%',
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const PhotoListTile = ( /*{ photo, index }*/) => {
  const [modalView, setModalView] = useState(false);
  const [editView, setEditView] = useState(false);
  const classes = useStyles();

  const toggleModal = () => {
    setModalView(!modalView);
  };

  const handleClose = () => {
    setModalView(false);
  };

  const toggleEditView = () => {
    console.log('edit view toggled')
    editView ? setEditView(false) : setEditView(true);
  };
  const EditMenu = () => (
    <Drawer open={editView} anchor='right' variant='temporary'>
      <form noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
        <TextField id="standard-basic" label="Standard" />
        <TextField id="standard-basic" label="Standard" />
      </form>
    </Drawer>
  );

  // const toggleEditView = () => {
  //   editView ? setEditView(false) : setEditView(true);
  // };

  return (
    <Container id="container" className={classes.root} >
      <GridListTile key={photo.photoId} onClick={toggleModal}>
        <img src={'https://cdn2.lamag.com/wp-content/uploads/sites/6/2021/05/live-music-daniel-dvorsky-DMaOGYRS4_U-unsplash-1.jpg'} alt={photo.description} width="20%" />
      </GridListTile>

      <Modal
        id="image-modal"
        open={modalView}
        onClose={handleClose}
        className={classes.modal}
      >

          <Paper className={classes.paper}>
            {/* conditional render if userid === ownerid */}
            <img src={'https://cdn2.lamag.com/wp-content/uploads/sites/6/2021/05/live-music-daniel-dvorsky-DMaOGYRS4_U-unsplash-1.jpg'}
            alt={photo.description}  style={{ maxWidth: '100%', maxHeight: '90%'}} />
            <Button variant="contained" color="primary" onClick={toggleEditView}>
            Edit Photo
          </Button>
            {/* <EditMenu /> */}
          </Paper>

      </Modal>
    </Container>
  )
};

export default PhotoListTile;
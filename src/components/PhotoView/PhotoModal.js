import React, { useState } from "react";
import {
  Chip,
  Container,
  Paper,
  GridListTileBar,
  Menu,
  MenuItem,
  Modal,
  IconButton,
} from "@material-ui/core";
// import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
// import IconButton from "@material-ui/core/IconButton";
// import InfoIcon from "@material-ui/icons/Info";
// import SharePermissions from "./SharePermissions";

import EditPhotoModal from './EditPhotoModal';

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  tag: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.25, 1),
    display: "flex",
    width: "max-content",
    alignContent:'center',
    justifyContent: 'center',
  },
  captions: {
    height: 'max-content',
  },
  // editMenu: {
  //   position: 'absolute',
  //   // margin: '20%',
  //   bottom: 5,
  //   right: 5,
  // },
  close: {
    top: theme.spacing(1),
    left: theme.spacing(1),
  },
  edit: {
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
    fontSize: "large",
  },
  img: {
    position: "relative",
    maxHeight: "100%",
    maxWidth: "100%",
    padding: "0",
  },
  modal: {
    maxHeight: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  photoContainer: {
    position: "absolute",
    maxHeight: "100vh",
    maxWidth: "100vw",
    display: "flex",
    padding: "0",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    height: "100vh",
    width: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const PhotoModal = ({ showModal, setShowModal, hasPrivilege, photoToShow }) => {
  // const [modalView, setModalView] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [refresh, setRefresh] = useState(0);
  const [showEditModal, setShowEditModal] = useState(false);
  const classes = useStyles();

  // const randOwner = "BlueOceaner22";
  const randDescription = [
    "Me and friends at a concert",
    "The best show ever",
    "great fun",
  ];
  const randTags = [
    ["cochella", "music", "friends"],
    ["guitar", "live", "music"],
    ["encore", "freestyle", "jamming", "guitar", "live", "music"],
  ];
  const randPermission = [0, 1, 2, 3];

  if (showModal) {
    showModal.description =
      showModal.description ||
      randDescription[Math.floor(Math.random() * randDescription.length)];
    showModal.tags =
      showModal.tags || randTags[Math.floor(Math.random() * randTags.length)];
    showModal.permission =
      showModal.permission ||
      randPermission[Math.floor(Math.random() * randPermission.length)];
  }

  // const toggleModal = () => {
  //   setModalView(!modalView);
  // };

  const handleModalClose = () => {
    // setModalView(false);
    setShowModal(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTagDelete = (array, index) => {
    array.splice(index, 1);
    setRefresh(refresh + 1);
  };


  const handleEditModalClose = () => {
    setShowEditModal(false);
  }

  const handleClose = () => {
    setAnchorEl(null);
    setShowModal(null);
  };

  return (
    <Container id="container" className={classes.root}>
      <Modal
        border={1}
        id="image-modal"
        open={showModal}
        onClose={handleModalClose}
        className={classes.modal}
      >
        <Container id="photo-container" className={classes.photoContainer}>
          {/* conditional render if userid === ownerid */}
          <img
            className={classes.img}
            src={showModal && showModal.url}
            alt={showModal && showModal.description}
          />
          <IconButton
            id="closeIcon"
            className="close"
            color="primary"
            style={{ position: "absolute", top: 5, left: 5 }}
            onClick={handleModalClose}
          >
            <CloseIcon />
          </IconButton>
          {/* <Menu
            id="edit-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{ padding: "10%" }}
          > */}
            {/* <MenuItem onClick={handleClose}>Edit Caption</MenuItem> */}
            {/* <MenuItem onClick={handleClose}>
              {showModal && showModal.description}
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {showModal && "Tags: " + showModal.tags.join(", ")}
            </MenuItem>
          </Menu> */}
          <GridListTileBar
            className={classes.captions}
            subtitle={
              <>
              <h3>{showModal && showModal.title}</h3>
              <p>By {showModal && showModal.owner}</p>
              <div style={{display:'flex'}}>
                {showModal && showModal.tags.map((tag, index, array) =>
                  <Paper
                    size="medium"
                    // icon={<FaceIcon />}
                    label={tag}
                    // onClick
                    className={classes.tag}
                    key={index}
                  >
                    {tag}
                  </Paper>
                )}
              </div>
              </>
            }
            style={{ fontSize: "large"}}
            actionIcon={
              <IconButton
                id="InfoIcon"
                className={classes.fab}
                color="primary"
                style={{ position: "absolute", top: 5, right: 5 }}
                onClick={()=>setShowEditModal(true)}
              >
                <InfoOutlinedIcon fontSize="large" />
              </IconButton>
            }
          />
        </Container>
      </Modal>
      <EditPhotoModal
      open={showEditModal}
      onClose={handleEditModalClose}
      aria-labelledby="Edit photo"
      aria-describedby="Modal to edit a photo"
      photoTitle={showModal && showModal.title}
      photoDescription={showModal && showModal.description}
      photoPermission={showModal && showModal.accessLevel}
      photoTags={showModal && showModal.tags}
      photoOwner={showModal && showModal.owner}

      hasPrivilege={hasPrivilege}
    />
    </Container>
  );
};

export default PhotoModal;

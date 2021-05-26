import React, { useState } from "react";
import {
  Container,
  Fab,
  GridListTileBar,
  Menu,
  MenuItem,
  Modal,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import userPhotos from "/Users/gea/HR/hr-sea16/blue-ocean/src/dummyData/fakePhotos.js";
import CloseIcon from "@material-ui/icons/Close";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import SharePermissions from "./SharePermissions";

const ownerInfo = userPhotos[0];
const photo = ownerInfo.photos[0];

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
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
    maxWidth: "100vh",
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

const PhotoListTile = ({ showModal, setShowModal }) => {
  const [modalView, setModalView] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const randOwner = "BlueOceaner22";
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
          <Fab
            id="closeIcon"
            className="close"
            color="primary"
            style={{ position: "absolute", top: 5, left: 5 }}
            onClick={handleModalClose}
          >
            <CloseIcon />
          </Fab>
          <Menu
            id="edit-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{ padding: "10%" }}
          >
            {/* <MenuItem onClick={handleClose}>Edit Caption</MenuItem> */}
            <MenuItem onClick={handleClose}>
              {showModal && showModal.description}
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {showModal && "Tags: " + showModal.tags.join(", ")}
            </MenuItem>
          </Menu>
          <GridListTileBar
            // title={tile.title}
            subtitle={<span>by: {randOwner}</span>}
            style={{ fontSize: "large" }}
            actionIcon={
              <Fab
                id="InfoIcon"
                className="edit"
                color="primary"
                style={{ position: "absolute", top: 5, right: 5 }}
                onClick={handleClick}
              >
                <InfoOutlinedIcon fontSize="large" />
              </Fab>
              // <IconButton
              //   aria-label={`info about ${showModal && showModal.description}`}
              //   className={classes.icon}
              // >
              //   <InfoIcon className={classes.icon} />
              // </IconButton>
            }
          />
        </Container>
      </Modal>
    </Container>
  );
};

export default PhotoListTile;

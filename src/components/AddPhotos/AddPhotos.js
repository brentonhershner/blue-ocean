import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';
import api from '../../api/api';
import { UserContext } from '../../contexts/user-context';

const useStyles = makeStyles((theme) => ({
  fab: {
    // margin: theme.spacing.unit,
    bottom: theme.spacing(2),
    position: 'fixed',
    left: 0,
  },

}));

const AddPhotos = () => {
  const classes = useStyles();

  const { userId } = useContext(UserContext);

  const upload = (e) => {
    const selectedFiles = e.target.files;
    const formData = new FormData();
    formData.append('userId', userId)
    for (const key of Object.keys(selectedFiles)) {
      formData.append('file', selectedFiles[key]);
    }

    api.upload(formData, userId)
      .then((response) => {/* console.log(response) */ })
      .catch((error) => console.error(error));
  };

  return (
    <Box
      // width="inherit"
      justifyContent="center"
      className={classes.fab}
    // style={{ position: 'absolute' }}
    >
      <input
        multiple
        type="file"
        accept="image/*"
        onChange={upload}
        id="iadd-images-button"
        style={{ display: 'none' }}
      />
      <label htmlFor="iadd-images-button" >
        <Fab
          color="secondary"
          aria-label="upload photos"
          component="span">
          <AddIcon />
        </Fab>
      </label>
    </Box>
  )
}

// AddPhotos.propTypes = {
//   setImages: PropTypes.func,
//   getImageList: PropTypes.func,
// }

export default AddPhotos;

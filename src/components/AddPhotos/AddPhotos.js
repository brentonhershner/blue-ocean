import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';
import photoApi from '../../api/photoApi';
import { UserContext } from '../../contexts/user-context';

const useStyles = makeStyles((theme) => ({
  fab: {
    left: theme.spacing(1),
    bottom: theme.spacing(1),
    position: 'fixed',
  },

}));

const AddPhotos = () => {
  const classes = useStyles();
  const userId = useContext(UserContext)?.userId || '00001';

  const upload = (e) => {
    const selectedFiles = e.target.files;
    const formData = new FormData();
    formData.append('userId', userId)
    for (const key of Object.keys(selectedFiles)) {
      formData.append('file', selectedFiles[key]);
    }

    photoApi.upload(formData)
      .then((response) => {
        console.log(response)
      })
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

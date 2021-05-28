import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import api from '../../api/api';

import { PhotosContext } from '../../contexts/photos-context.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // flexWrap: 'wrap',
    margin: theme.spacing(1),
  },
  tile: {

  }
}));


const TestPage = () => {
  // const [photos, setPhotos] = useState([]);
  const [userId, setUserId] = useState('00001');
  const [secondaryUserId, setSecondaryUserId] = useState('00002');
  const classes = useStyles();

  const { photos, setPhotos, } = useContext(PhotosContext);


  const updatePhotos = async (fetchedPhotos) => {
    const imageList = await fetchedPhotos;
    // console.log('imageList', imageList);
    // const imageUrls = imageList ? imageList.map((image) => image.url) : [];
    setPhotos(imageList || []);
  }

  useEffect(() => {
    const fetchedPhotos = api.getFeed(userId);
    updatePhotos(fetchedPhotos);
  }, [photos && photos.length])

  return (
    <Paper className={classes.root} >
      <Typography variant="h2">
        testpage
      </Typography>

      <TextField
        value={userId}
        id="outlined-basic"
        label="PrimaryUserId"
        variant="outlined"
        onChange={(e) => setUserId(e.target.value)}
      />
      <TextField
        value={secondaryUserId}
        id="outlined-basic"
        label="SecondaryUserId"
        variant="outlined"
        onChange={(e) => setSecondaryUserId(e.target.value)}
      />

      <Button variant='contained' onClick={async () => {
        const result = await api.getFeed(userId);
        console.log(result);
        updatePhotos(result);
      }}>
        Get Feed
      </Button>

      <Button variant='contained' onClick={async () => {
        const result = await api.getUserPhotos(userId);
        console.log(result);
        updatePhotos(result);
      }}>
        Get Users Photos
      </Button>

      <Button variant='contained' onClick={async () => {
        const result = await api.getUserInfo(userId);
        console.log(JSON.stringify(result, null, 2));
      }}>
        Get User info
      </Button>

      <Button variant='contained' onClick={async () => {
        const result = await api.friendAction(userId, secondaryUserId, 'request');
        console.log(result);
      }}>
        Request Friend
      </Button>

      {/* <Button variant='contained' onClick={async () => {
        const result = await api.getUserInfo(userId);
        console.log(JSON.stringify(result, null, 2));
      }}>
        Get User info
      </Button> */}

      <GridList cols={3} >
        {photos.map((tile) => (
          <GridListTile key={tile.url} >
            <img src={`${tile.url}`} alt={tile.url} />
          </GridListTile>
        ))}
      </GridList >
    </Paper >
  );
}

export default TestPage;

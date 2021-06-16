import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import api from '../../api/api';
// import albumApi from '../../api/albumApi';
import photoApi from '../../api/photoApi';
import userApi from '../../api/userApi';
import UsersTable from './UsersTable';
import { debounce } from 'lodash';

import { PhotosContext } from '../../contexts/photos-context.js';
import { UserContext } from '../../contexts/user-context.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: theme.spacing(1),
    '& > *': {
      margin: theme.spacing(1),
      // width: '25ch',
    },
  },
  buttonGroup: {

  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: theme.spacing(1),
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

}));


const AdminPage = () => {
  // const initialUserId = React.useContext(UserContext);
  // const [userId, setUserId] = useState(initialUserId?.userId || '00001');
  const { photos, setPhotos } = useContext(PhotosContext);
  const { user, setUserById } = useContext(UserContext);
  // const [ users, setUsers ] = React.useState([]);
  const [userId, setUserId] = React.useState('');
  const classes = useStyles();

  const updatePhotos = async (fetchedPhotos) => {
    const imageList = await fetchedPhotos;
    // console.log('imageList', imageList);
    // const imageUrls = imageList ? imageList.map((image) => image.url) : [];
    setPhotos(imageList || []);
  }

  useEffect(() => {
    const fetchedPhotos = photoApi.getFeed(user?.userId);
    updatePhotos(fetchedPhotos);
    return (() => { console.log('should run once when user changes') })
  }, [user])

  const debouncedSetUser = React.useCallback(debounce(setUserById, 500), []);

  const handleChange = (e) => {
    setUserId(e.target.value)
    debouncedSetUser(e.target.value)
  }

  return (
    <Paper className={classes.root} >
      <Typography
        display='block'
        variant="h2"
      >
        Admin Page
      </Typography>

      <div className={classes.buttons}>
        <Button
          variant='contained'
          className={classes.button}
          onClick={async () => {
            const result = await userApi.getAll();
            console.log(result);
          }}
        >
          List All Users
        </Button>

        {/* <Button
          variant='contained'
          className={classes.button}
          onClick={async () => {
            const result = await userApi.getUserInfo(user?.userId);
            console.log(result);
          }}
        >
          Get All Photos
        </Button> */}
      </div>


      <form
        className={classes.form}
        onSubmit={(e) => e.preventDefault()}
      >
        <TextField
          value={userId}
          id="outlined-basic"
          label="User ID"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={handleChange}
        />
        {/* <TextField
          value={secondaryUserId}
          id="outlined-basic"
          label="SecondaryUserId"
          variant="outlined"
          onChange={(e) => setSecondaryUserId(e.target.value)}
        /> */}
      </form>

      <div className={classes.buttons}>

        <ButtonGroup>
          <Button
            variant='contained'
            className={classes.button}
            onClick={async () => {
              const result = await photoApi.getFeed(user?.userId);
              // console.log(result);
              updatePhotos(result);
            }}
          >
            Get Feed
          </Button>


          <Button
            variant='contained'
            className={classes.button}
            onClick={async () => {
              const result = await photoApi.getUserPhotos(user?.userId);
              console.log(result);
              updatePhotos(result);
            }}
          >
            Get Users Photos
          </Button>
        </ButtonGroup>




        {/* <ButtonGroup>
          <Button
            variant='contained'
            className={classes.button}
            onClick={async () => {
              const result = await api.friendAction(user?.userId, secondaryUserId, 'request');
              console.log(result);
            }}
          >
            Request Friend
          </Button>


          <Button
            variant='contained'
            className={classes.button}
            onClick={async () => {
              const result = await api.friendAction(user?.userId, secondaryUserId, 'cancelRequest');
              console.log(result);
            }}
          >
            Cancel Request
          </Button>
        </ButtonGroup> */}


        {/* <ButtonGroup>
          <Button
            variant='contained'
            className={classes.button}
            onClick={async () => {
              const result = await api.friendAction(user?.userId, secondaryUserId, 'accept');
              console.log(result);
            }}
          >
            Accept Request
          </Button>


          <Button
            variant='contained'
            className={classes.button}
            onClick={async () => {
              const result = await api.friendAction(user?.userId, secondaryUserId, 'reject');
              console.log(result);
            }}
          >
            Reject Request
          </Button>
        </ButtonGroup> */}


        {/* <ButtonGroup> */}
        {/* </ButtonGroup> */}

        <Button
          variant='contained'
          className={classes.button}
          onClick={async () => {
            const editObj = {}
            const result = await photoApi.updatePhoto(editObj);
            console.log(result);
          }}
        >
          Update Photo
        </Button>

        <Button
          variant='contained'
          className={classes.button}
          onClick={async () => {
            const editObj = {}
            const result = await api.kitchenSink(editObj);
            console.log(result);
          }}
        >
          Kitchen Sink
        </Button>

      </div>

      {/* <Button variant='contained' onClick={async () => {
        const result = await api.getUserInfo(user?.userId);
        console.log(JSON.stringify(result, null, 2));
      }}>
        Get User info
      </Button> */}

      <UsersTable></UsersTable>

      <GridList cols={3} >
        \//        {photos && photos.map((tile) => (
          <GridListTile key={tile.url} >
            <img src={`${tile.url}`} alt={tile.url} />
          </GridListTile>
        ))}
      </GridList >
    </Paper >
  );
}

export default AdminPage;

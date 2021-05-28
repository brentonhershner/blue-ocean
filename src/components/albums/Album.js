import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import { withStyles } from "@material-ui/core/styles";
// import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit'


// import { PhotosContext } from '../../contexts/photos-context';
import { SearchContext } from '../../contexts/search-context';

const useStyles = makeStyles({
  root: {
    maxHeight: 100,
    maxWidth: 100,
    padding: 0,
  },
  content: {
    padding: 3,
  },
  title: {
    fontSize: 14,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  actions: {
    display:'flex',
    justifyContent:'space-between'
  }
});

function Album (props) {
  const classes = useStyles();
  // const [showModal, setShowModal] = useState(false);



  const { setSearchTerm } = useContext(SearchContext);

  // const handleClose = () => {
  //   setShowModal(false)
  // }
  const handleEditAlbumOpen = () => {
    props.setIsAlbumCreate(false);
    props.setAlbumTitle(props.album.title);
    props.setAlbumDescription(props.album.description);
    props.setAlbumPermission(props.album.permission);
    props.setAlbumTags(props.album.tags);
    props.setShowAlbumModal(true)
  }


  const showAlbum = () => {
    setSearchTerm('');
    let shownAlbum = [];
    props.album.photoIds.forEach((id)=>{
      props.masterPhotos.forEach(photo => {
        if(photo.photoId === id) {
          shownAlbum.push(photo)};
      })
    })
    // props.setShownPhotos(shownAlbum);
    props.setCurrentAlbumPhotos(shownAlbum);
    if (props.onSelect) {
      props.handleSelectClick(); // turns off select when album is clicked
    }
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={()=> {
        props.setCurrentAlbum(props.album);
        showAlbum();
        }}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} gutterBottom>
            {props.album.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            By&nbsp;{props.album.owner}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        {props.hasPrivilege
        ?  <IconButton onClick={handleEditAlbumOpen} size="small" aria-label="delete">
            <EditIcon />
          </IconButton>
        :  <IconButton onClick={handleEditAlbumOpen} size="small" aria-label="delete">
            <InfoIcon />
          </IconButton>
        }
      </CardActions>
    </Card>
  );

};

export default Album
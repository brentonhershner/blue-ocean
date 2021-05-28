import React, { useState, useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CloseIcon from '@material-ui/icons/CloseRounded';
import { PhotosContext } from '../../contexts/photos-context';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";


const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "80vw",
    maxHeight: "80vh",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'auto',
  },
  button: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
  select: {
    padding: theme.spacing(0, 1)
  },
  tag: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0, 0.5),
    display: "flex",
    width: "max-content",
    alignContent:'center',
    justifyContent: 'center',
  },
  image: {
    maxHeight: window.innerWidth / 4,
  },
  extra: {
    maxHeight: window.innerWidth / 4,
    display: 'flex',
    justifyContent: 'center',
  },
}));


function EditPhotosModal(props) {
  const [currentTag, setCurrentTag] = useState('');
  const [tags, setTags] = useState([]);
  const [permission, setPermission] = useState(0);

  const { photos,
    // setPhotos,
    // updatePhoto
  } = useContext(PhotosContext);

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      event.preventDefault();
      if (currentTag && !tags.includes(currentTag)) {
      let tempTags = tags.slice();
      tempTags.push(currentTag);
      setTags(tempTags);
      }
      setCurrentTag('');
    }
  }

  const removeTag = (index) => {
    let tempTags = tags.slice();
      tempTags.splice(index, 1);
      setTags(tempTags);
  }

  const handlePermissionChange = (event) => {
    setPermission(event.target.value);
  };

  const resetModalState = () => {
    setCurrentTag('');
    setTags([]);
    setPermission(0);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let output = props.selected.map((item) => {return {item: item, tags, permission}})
    console.log(output);
    // API CALL HERE!!!
    // EDIT MULTIPLE photo call, in a shape that backend expects
    // api.updatePhotos();

    props.onClose();
    resetModalState();
  }

  const classes = useStyles();
  return(
  <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="Edit Photos"
        aria-describedby="Modal to edit photos"
      >
      <div style={{
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        width: '80vw',
        maxHeight: '90vh',
      }}
        className={classes.paper}>
        <h2 id="Edit Photos">Editing {props.selected.length} Photo(s)</h2>
        <div style={{marginBottom:10}}>
        <GridList cols={3} component="div" className={classes.gridList}>
        {props.selected.map((item, index) => {
          if(index < 5) {
            return (
              <GridListTile className={classes.image}>
              <img
                srcSet={props.shownPhotos[item].url}
                alt={props.shownPhotos[item].title}
                loading="lazy"
              />
              </GridListTile>
            )
          }
          if (index === 5 && props.selected.length === 6){
            return (
              <GridListTile className={classes.image}>
              <img
                srcSet={props.shownPhotos[item].url}
                alt={props.shownPhotos[item].title}
                loading="lazy"
              />
              </GridListTile>
            )
          }
          if (index === props.selected.length-1) {
            return (
              <GridListTile className={classes.extra}>
                  <h1>+{props.selected.length-5}</h1>
              </GridListTile>
            )
          }
          return null;
        })}
        </GridList>
        </div>
        <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
        <InputLabel id="demo-simple-select-label">Permission</InputLabel>
        <Select
          className={classes.select}
          labelId="permission-select-label"
          id="permission-select"
          value={permission}
          onChange={handlePermissionChange}
        >
          <MenuItem value={0}>Private</MenuItem>
          <MenuItem value={1}>Friends Only</MenuItem>
          <MenuItem value={2}>Public</MenuItem>
        </Select>
        <br />
        <TextField id="standard-basic" label="Add Tags" onKeyPress={handleKeyPress} value={currentTag} onChange={(e)=> {setCurrentTag(e.target.value)}}/>
        <br />
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        {tags.map((item, index) => (
          <Paper key={index} className={classes.tag}>{item}&nbsp;<CloseIcon style={{fontSize:16}} onClick={()=>removeTag(index)} /></Paper>
        ))}
        </div>
        <Button type="submit" className={classes.button} size="small" variant="contained" color="primary">Submit</Button>
        <Button onClick={() => {props.onClose(); resetModalState()}} className={classes.button} size="small" variant="contained" color="secondary">Cancel</Button>
        </form>
      </div>
    </Modal>
  )
}

export default EditPhotosModal
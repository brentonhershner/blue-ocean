import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CloseIcon from '@material-ui/icons/CloseRounded';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "80vw",
    maxHeight: "80vh",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  button: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
  select: {
    //padding: theme.spacing(0, 1)
    marginBottom:0,
  },
  tag: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0, 0.5),
    display: "flex",
    width: "max-content",
    alignContent:'center',
    justifyContent: 'center',
  },
  title: {
    minWidth: '100%',
  },
  description: {
    minWidth: '100%',
  }
}));

function EditPhotosModal(props) {
  const classes = useStyles();
  const [currentTag, setCurrentTag] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [tempTagsArr, setTempTagsArr] = useState();
  const [inputPermission, setInputPermission] = useState('');
  const [isInEdit, setIsInEdit] = useState(false);

  useEffect(()=>{
    setIsInEdit(false);
    setCurrentTag('');
    setInputTitle('')
    setInputDescription('')
    setInputPermission('')
    setTempTagsArr(props.photoTags)
  },[props.photoTitle])


  const handleKeyPress = (event) => {
    if(event.key === 'Enter' && currentTag){
      event.preventDefault();
      if (currentTag && !tempTagsArr.includes(currentTag)) {
        let tempTags = tempTagsArr.slice();
        tempTags.push(currentTag);
        setTempTagsArr(tempTags);
      }
      setCurrentTag('');
    }
  }

  // const removeTag = (index) => {
  //   let tempTags = props.albumTags.slice();
  //     tempTags.splice(index, 1);
  //     props.setAlbumTags(tempTags);
  // }

  const handlePermissionChange = (event) => {
    setInputPermission(event.target.value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }

  // const deleteAlbum = () => {
  //   console.log(props.albumTitle);
  // }

  const handleEditSwitch = (e) => {
    e.preventDefault();
    setIsInEdit(true)
  }

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log({
      title: inputTitle,
      description: inputDescription,
      tags: tempTagsArr,
      permission: inputPermission,
    })
  }

  return(
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="Edit Photos"
      aria-describedby="Modal to edit photos"
    >
      <div
        style={{
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        width: '80vw',
        maxHeight: '90vh',
        }}
        className={classes.paper}>
          <form
          // onSubmit={handleSubmit}
          className={classes.root}
          noValidate autoComplete="off"
          >
            <TextField
              className={classes.title}
              id="title"
              label="Title"
              value={inputTitle || props.photoTitle}
              disabled={isInEdit ? false: true}
              onChange={(e) => {setInputTitle(e.target.value)}}
            />
            <TextField
              className={classes.title}
              id="owner"
              label="Uploaded by"
              value={props.photoOwner}
              disabled
              onChange={(e) => {setInputTitle(e.target.value)}}
            />
            <TextField
              className={classes.description}
              id="description"
              label="Description"
              multiline
              disabled={isInEdit ? false: true}
              value={inputDescription ||props.photoDescription}
              onChange={(e)=> {setInputDescription(e.target.value)}}
            />
            <Select
              className={classes.select}
              labelId="permission-select-label"
              id="permission-select"
              value={inputPermission || props.photoPermission}
              disabled={isInEdit ? false: true}
              onChange={handlePermissionChange}
            >
              <MenuItem value={0}>Private</MenuItem>
              <MenuItem value={1}>Friends Only</MenuItem>
              <MenuItem value={2}>Public</MenuItem>
            </Select>
            <br />
            {isInEdit
              ? <TextField
                  id="AddTag"
                  label="Add Tags"
                  onKeyPress={handleKeyPress}
                  value={currentTag}
                  onChange={(e)=> {setCurrentTag(e.target.value)}}
                />
              : <TextField
                  label="Tags"
                  disabled
                >
                  Tags
                </TextField> }
            <br />
            <div
              style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}>
            {props.photoTags && (tempTagsArr || props.photoTags).map((item, index) => (
              <Paper key={index} className={classes.tag}>
                {item}&nbsp;
                {isInEdit
                ? <CloseIcon
                style={{fontSize:16}}
                // onClick={()=>removeTag(index)}
                />
                : null
              }
              </Paper>
            ))}
            </div>
            {isInEdit ?
            <>
               <Button onClick={handleEditSubmit} type="submit" className={classes.button} size="small" variant="contained" color="primary">Submit</Button>
               <Button onClick={props.onClose} className={classes.button} size="small" variant="contained" color="secondary">Close</Button>
            </>
            : (props.hasPrivilege
            ?  <Button onClick={handleEditSwitch} type="submit" className={classes.button} size="small" variant="contained" color="primary">Edit</Button>
            :  <Button onClick={props.onClose} className={classes.button} size="small" variant="contained" color="secondary">Close</Button>
            )}
          </form>


      </div>

    </Modal>

  )
}

export default EditPhotosModal;
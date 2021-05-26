import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
//import { UserContext } from '../contexts/user-context';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

function renderRow(friends, pending, requested) {

  return (
    <div>

{/* Friends on your friends list  */}
    {friends.map((item, i) => (
      <ListItem button key={`${item.userId}` + i + 'f'}>
    <ListItemText primary={`${item.username}`} secondary={'Friend'} key={`${item.userId}` + i}/>

    </ListItem>
    ))
  }
  {/* Requested friends  */}
  {pending.map((item, i) => (
      <ListItem button key={`${item.userId}` + i + 'p'}>
    <ListItemText primary={`${item.username}`} secondary={'Pending'} key={`${item.userId}` + i}/>

    </ListItem>
    ))
  }
{/* Friends you have requested to be friends with  */}
{requested.map((item, i) => (
      <ListItem button key={`${item.userId}` + i + 'r'}>
    <ListItemText primary={`${item.username}`} secondary={'Requested'} key={`${item.userId}` + i}/>

    </ListItem>
    ))
  }
    </div>
  )

  // const { index, style}  = props;
  // console.log(style, "this is style ")
  // return (
  //   <ListItem button style={style} key={index}>
  //     {/* {props ? props.map((friends) => ( <ListItemText  primary={friends.username} key={ friends.userId } /> )) : null} */}
  //      <ListItemText primary={`Item ${props}`} />
  //   </ListItem>
  // );
}

renderRow.propTypes = {
    friends: PropTypes.object.isRequired,
    requested: PropTypes.object.isRequired,
    pending: PropTypes.object.isRequired,
  };

  function FriendsList({friends, pending, requested, index, style }) {
    const classes = useStyles();

  console.log(friends)
  return (
    <div className={classes.root}>
      <p>Friends</p>
      <FixedSizeList height={300} width={300} itemSize={36} itemCount={1} >
{() => renderRow(friends, pending, requested) }
        </FixedSizeList>
    </div>
  );
}

export default FriendsList;
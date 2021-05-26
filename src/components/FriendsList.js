import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { FixedSizeList } from 'react-window';
import Friend from './SharedComponents/Friend.jsx';


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
    <Friend  friend={item} status={'friends'} key={item.userId} />
    ))
  }
  {/* Requested friends  */}
  {pending.map((item, i) => (
    <Friend  friend={item} status={'pending'} key={item.userId} />
    ))
  }
{/* Friends you have requested to be friends with  */}
{requested.map((item, i) => (
     <Friend  friend={item} status={'requested'} key={item.userId} />
    ))
  }
    </div>
  )
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
      <FixedSizeList height={250} width={300} itemSize={36} itemCount={1} >
{() => renderRow(friends, pending, requested) }
        </FixedSizeList>
    </div>
  );
}

export default FriendsList;
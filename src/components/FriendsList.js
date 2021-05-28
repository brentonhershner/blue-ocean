import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import { FixedSizeList } from 'react-window';
import Friend from './SharedComponents/Friend.jsx';
import Paper from '@material-ui/core/Paper';
import { UserContext } from '../contexts/user-context';
import SearchFriends from './search/SearchFriends';
import { SearchContext } from '../contexts/search-context';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: "auto",
    // height: 400,
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
  },
}));

function renderRow(friends, pending, requested) {
  // console.log('triggered')
  return (
    <>
      {/* Friends you have requested to be friends with  */}
      {requested.map((item, i) => (
        <Friend  friend={item} status={'requested'} key={item.userId} />
      ))}

      {/* Requested friends  */}
      {pending.map((item, i) => (
        <Friend  friend={item} status={'pending'} key={item.userId} />
      ))}

      {/* Friends on your friends list  */}
      {friends.map((item, i) => (
        <Friend  friend={item} status={'friends'} key={item.userId} />
      ))}
    </>
  )
}

renderRow.propTypes = {
    friends: PropTypes.object.isRequired,
    requested: PropTypes.object.isRequired,
    pending: PropTypes.object.isRequired,
  };

  function FriendsList({ index, style }) {
    const classes = useStyles();
    const { friends, pending, requested } = useContext(UserContext);
    const { searchTerm } = useContext(SearchContext);
    const [ shownUsers, setShownUsers ] = useState([]);

    return (
      <Paper className={classes.root} elevation="1">
        <SearchFriends setShownUsers={setShownUsers} />
        <h2 style={{paddingTop: "10%"}}>Friends & Requests</h2>
        <ul style={{overflow: "hidden", "overflow-y": "scroll"}}>
          {searchTerm.length > 0
            ? shownUsers.map((user, i) => (
                <Friend friend={user} status={user.status || 'none'} key={i} />
              ))
            : renderRow(friends, pending, requested)
          }
        </ul>
      </Paper>
    );
}

export default FriendsList;

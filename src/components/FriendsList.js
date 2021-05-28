import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import { FixedSizeList } from 'react-window';
import Friend from './SharedComponents/Friend.jsx';
import { UserContext } from '../contexts/user-context';
import SearchFriends from './search/SearchFriends';
import { SearchContext } from '../contexts/search-context';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

function renderRow(friends, pending, requested) {
  // console.log('triggered')
  return (
    <>
      {/* Friends on your friends list  */}
      {friends.map((item, i) => (
        <Friend  friend={item} status={'friends'} key={item.userId} />
      ))}

      {/* Requested friends  */}
      {pending.map((item, i) => (
        <Friend  friend={item} status={'pending'} key={item.userId} />
      ))}

      {/* Friends you have requested to be friends with  */}
      {requested.map((item, i) => (
        <Friend  friend={item} status={'requested'} key={item.userId} />
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
      <div className={classes.root}>
        <SearchFriends setShownUsers={setShownUsers} />
        <p>Friends</p>
        <ul>
          {searchTerm.length > 0
            ? shownUsers.map((user, i) => (
                <Friend friend={user} status={user.status || 'none'} key={i} />
              ))
            : renderRow(friends, pending, requested)
          }
        </ul>
      </div>
    );
}

export default FriendsList;

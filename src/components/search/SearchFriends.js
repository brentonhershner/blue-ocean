import React, { useContext, useEffect } from 'react';
import { SearchContext } from '../../contexts/search-context';
import { UserContext } from '../../contexts/user-context';

function SearchFriends(props) {
  const { searchTerm } = useContext(SearchContext);
  const { friends, pending, requested, allUsers } = useContext(UserContext);
  const { setShownUsers } = props;

  useEffect(() => {
    filterLists(searchTerm);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);


  function filterLists(string) {
    let filteredUserList;

    if (!string) {
      setShownUsers([]);
    } else {
      filteredUserList = allUsers.filter((user) => (
        user.username.toLowerCase().includes(string.toLowerCase())
      ));
      filteredUserList.forEach((user) => {
        friends.forEach((friend) => {
          if (friend.username === user.username) {
            user.status = 'friends'
          }
        })
        pending.forEach((pending) => {
          if (pending.username === user.username) {
            user.status = 'pending'
          }
        })
        requested.forEach((requested) => {
          if (requested.username === user.username) {
            user.status = 'requested'
          }
        })
      })
      setShownUsers(filteredUserList);
    }
  }

  return (
    <>
      {searchTerm ? <div>Showing results for: {searchTerm}</div> : null}
    </>
  )
}

export default SearchFriends;

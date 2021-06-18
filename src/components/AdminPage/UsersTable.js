import React from 'react';
import Typography from '@material-ui/core/Typography';
// import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';
import { UserContext } from '../../contexts/user-context.js';

const UsersTable = () => {
  // TODO: Users table
  const { user } = React.useContext(UserContext);
  // console.dir(user);
  return (
    <div>
      <Typography>UserId: {user?.userId}</Typography>
      <Typography>UserLevel: {user?.userLevel}</Typography>
      <Typography>Username: {user?.userName}</Typography>
      <Typography>email: {user?.email}</Typography>
      <Typography>Friends</Typography>
      <div>{user?.friends?.map(friend => (
        <Typography key={friend}>{friend}</Typography>
      ))}</div>
      <Typography>Photos</Typography>
      <div>{user?.photos?.map(photo => (
        <Typography key={photo}>{photo}</Typography>
      ))}</div>
    </div>
  )
}

export default UsersTable;

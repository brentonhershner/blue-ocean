import React from 'react';
// import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';
import { UserContext } from '../../contexts/user-context.js';


const UsersTable = () => {
  // TODO: Users table
  const { user } = React.useContext(UserContext);
  console.log(JSON.stringify(Object.keys(user)), null, 2);
  return (
    <div>
      <div>UserId: {user?.userId}</div>
      <div> &nbsp;</div>
      <div>UserLevel: {user?.userLevel}</div>
      <br/>
      <div>Username: {user?.userName}</div>
      <br/>
      <div>email: {user?.email}</div>
      <br/>
      <div>Friends</div>
      <div>{user?.friends?.map(friend => (
        <div>{friend}</div>
      ))}</div>
    </div>
  )

}

export default UsersTable;
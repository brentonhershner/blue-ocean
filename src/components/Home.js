import React from 'react';
//  import { useContext } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography'
import { Link as RouterLink } from 'react-router-dom';
import { UserInfoContext } from './Login/Login';

import FriendsList from './FriendsList';
// import Search from './navbar/Search';
// import NavDrawer from './navbar/NavDrawer'

//  import { UserContext } from '../contexts/user-context'
// import { PhotosContext } from '../contexts/photos-context'
import ContextTest from './ContextTest';

const Home = ({ logOut }) => {
  // const value = useContext(UserInfoContext);
  // Use context in this instance is for the friends list

  return (
    <div>
      <Typography variant="h2">
        HELLO WORLD!
        <br />

        <FriendsList />
      </Typography>
      <Link to='/testpage' component={RouterLink}>Testing TestPage</Link>
      <br/>
      <Link to='/createuser' component={RouterLink}>Testing Create User</Link>
      <br/>
      <Link to='/login' component={RouterLink}>Testing Login</Link>
    </div>
  );

};
export default Home;
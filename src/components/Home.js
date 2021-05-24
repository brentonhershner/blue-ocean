import React from 'react';
// import { useContext } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography'
import { Link as RouterLink } from 'react-router-dom';
import Search from './navbar/Search';

// import { UserContext } from '../contexts/user-context'
// import { PhotosContext } from '../contexts/photos-context'
import ContextTest from './ContextTest';

const Home = () => {
  return (
    <div>
      <Search />
      <Typography variant="h2">
        HELLO WORLD!
        <br />
        <ContextTest />
      </Typography>
      <Link to='/testpage' component={RouterLink}>Testing Purposes Only</Link>
    </div>
  );
};

export default Home;
import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography'
import { Link as RouterLink } from 'react-router-dom';
import Search from './navbar/Search';

const Home = () => {
  return (
    <div>
      <Search />
      <Typography variant="h2">
        HELLO WORLD!
      </Typography>
      <Link to='/testpage' component={RouterLink}>Testing Purposes Only</Link>
    </div>
  );
};

export default Home;
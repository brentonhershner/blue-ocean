import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography'
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Typography variant="h2">
        HELLO WORLD!
      </Typography>
      <Link to='/getimagestemp' component={RouterLink}>Testing Purposes Only</Link>
    </div>
  );
};

export default Home;

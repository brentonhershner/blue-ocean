import React, { useState, useNavigate } from 'react';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
/*-------------------Material-UI Imports-------------------*/
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Link from '@material-ui/core/Link';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

export default function Login() {
  // const navigate = useNavigate();
  const classes = useStyles();

  const [values, setValues] = useState({
    username: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (userObj) => {
    axios.get('/api/users/login', userObj)
      .then((response) => {
        console.log(`User login post successful `, response.data);;
      })
      .catch((error) => { throw error; });
  }

return (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      <Typography component="div" style={{ height: '100vh' }}>
        <TextField
          className={classes.margin}
          id="outlined-basic-user"
          label="Username"
          variant="outlined"
          required
          type='text'
          value={values.username}
          onChange={handleChange('username')}
          margin="normal"
        />
        <br />
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-basic-password"
            label="Password"
            variant="outlined"
            required
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            margin="none"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <div>
          <br />
        </div>
        <Link to='/' component={RouterLink}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          margin="normal"
          className={classes.create}
          onClick={() => handleSubmit(values)}
        >
          Login
          </Button>
          </Link>
        <div>
          <br />
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          margin="normal"
          className={classes.create}
        >
          Forget your password?
          </Button>
        <div>
          <br />
        </div>
        <Link to='/' component={RouterLink}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          margin="normal"
          className={classes.create}
        >
          Create an Account
        </Button>
        </Link>
      </Typography>

    </Container>
  </React.Fragment>
);
}


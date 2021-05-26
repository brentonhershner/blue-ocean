import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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

export default function CreateUser() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
    first_name: '',
    last_name: '',
    email: '',
    username: '',
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

  const displayExistingEmail = () => {
    document.getElementsByClassName('message')[0].innerText = 'User exists at that email address!';
  }
  const validateEmail = () => {
    const email = document.formBox.email.value;
    const at = email.indexOf('@');
    const dot = email.indexOf('.');
    if (at < 1) {
      document.getElementsByClassName('message')[0].innerText = 'Not a valid email address!';
      document.getElementsByClassName('inActiveInput')[0].setAttribute('disabled', '');
    } else if (dot < at + 2) {
      document.getElementsByClassName('message')[0].innerText = 'Not a valid email address!';
      document.getElementsByClassName('inActiveInput')[0].setAttribute('disabled', '');
    } else if (dot + 2 >= email.length) {
      document.getElementsByClassName('message')[0].innerText = 'Not a valid email address!';
      document.getElementsByClassName('inActiveInput')[0].setAttribute('disabled', '');
    } else {
      document.getElementsByClassName('message')[0].innerText = 'Email address is valid!';
      document.getElementsByClassName('inActiveInput')[0].removeAttribute('disabled', '');
    }
  }
  const validateUserName = () => {
    if (document.formBox.userName.value.length >= 8) {
      document.getElementsByClassName('message')[0].innerText = 'Username length is good!';
      document.getElementsByClassName('inActiveInput')[1].removeAttribute('disabled', '');
    } else {
      document.getElementsByClassName('message')[0].innerText = 'Username needs to be at least 8 characters long!';
      document.getElementsByClassName('inActiveInput')[1].setAttribute('disabled', '');
    }
  }
  const validatePassword = () => {
    if (document.formBox.password.value.length >= 8) {
      document.getElementsByClassName('message')[0].innerText = 'Password length is good!';
      document.getElementsByClassName('inActiveInput')[2].removeAttribute('disabled', '');
    } else {
      document.getElementsByClassName('message')[0].innerText = 'Password needs to be at least 8 characters long!';
      document.getElementsByClassName('inActiveInput')[2].setAttribute('disabled', '');
    }
  }
  const validateConfirm = () => {
    if (document.formBox.confirm.value === document.formBox.password.value) {
      document.getElementsByClassName('message')[0].innerText = 'Passwords match!'
      document.getElementsByClassName('inActive')[0].removeAttribute('disabled', '');
      document.getElementsByClassName('inActive')[0].classList.add('active');
    } else {
      document.getElementsByClassName('message')[0].innerText = 'Passwords don\'t match!'
      document.getElementsByClassName('inActive')[0].setAttribute('disabled', '');
      document.getElementsByClassName('inActive')[0].classList.remove('active');
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ height: '100vh' }}>
          <TextField
            className={classes.margin}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            required
            onChange={"add handlechange"}
            value={""}
            margin="normal"
          />
          <br />
          <TextField
            className={classes.margin}
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            required
            onChange={"add handlechange"}
            value={""}
            margin="normal"
          />
          <br />
          <TextField
            onKeyUp={() => validateEmail()}
            className={classes.margin}
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            required
            onChange={"add handlechange"}
            value={""}
            margin="normal"
          />
          <br />
          <TextField
            className={classes.margin}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            required
            onChange={"add handlechange"}
            value={""}
            margin="normal"
            onKeyUp={() => validateUserName()}
          />
          <br />
          <FormControl className={clsx(classes.margin, classes.textField)}variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            onKeyUp={() => validatePassword()}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            required
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            value={""}
            margin="normal"
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
          <OutlinedInput
            onKeyUp={() => validateConfirm()}
            id="outlined-basic"
            label="Confirm"
            variant="outlined"
            required
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            value={""}
            margin="normal"
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.create}
          >
            Create Account
          </Button>
        </Typography>

      </Container>
    </React.Fragment>
  );
}
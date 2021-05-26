import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
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
          />
          <br />
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Create a Password</InputLabel>
            <OutlinedInput
              id="outlined-basic"
              label="Password"
              variant="outlined"
              required
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
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
          <br />
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Confirm Your Password</InputLabel>
            <OutlinedInput
              id="outlined-basic"
              label="Password"
              variant="outlined"
              required
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
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
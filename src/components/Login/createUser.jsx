import React from 'react';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import axios from 'axios';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

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
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function CreateUser() {
  const classes = useStyles();
  const access = [ 1, 2, 3 ];
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [values, setValues] = React.useState({
    first_name: '',
    last_name: '',
    email: '',
    userLevel: 'a',
    selected: 'a',
    username: '',
    password: '',
    confirm: '',
    showPassword: false,
    showConfirm: false
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

  const handleClickShowConfirm = () => {
    setValues({ ...values, showConfirm: !values.showConfirm });
  };

  const handleMouseDownConfirm = (event) => {
    event.preventDefault();
  };

  const handleChangeSelected = (event) => {
    setSelectedValue(event.target.value);
  };

  const addUser = (userObj) => {
    axios.post('/api/users', userObj)
    .then(console.log(values))
    .catch((err) => { console.log(err) })
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography name="formBox" component="div" style={{ height: '100vh' }}>
          <TextField
            className={classes.margin}
            id="outlined-basic-first"
            label="First Name"
            variant="outlined"
            required
            onChange={handleChange(`first_name`)}
            value={values.first_name}
            margin="normal"
          />
          <br />
          <TextField
            className={classes.margin}
            id="outlined-basic-last"
            label="Last Name"
            variant="outlined"
            required
            onChange={handleChange(`last_name`)}
            value={values.last_name}
            margin="normal"
          />
          <br />
          <TextField
            className={classes.margin}
            id="outlined-basic-email"
            label="Email Address"
            variant="outlined"
            name="email"
            required
            onChange={handleChange(`email`)}
            value={values.email}
            margin="normal"
          />
          <br />
          <TextField
            className={classes.margin}
            id="outlined-basic-username"
            label="Username"
            name="userName"
            variant="outlined"
            required
            onChange={handleChange(`username`)}
            value={values.username}
            margin="normal"
          />
          <br />
          <FormControl className={clsx(classes.margin, classes.textField)}variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-basic-password"
            name="password"
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
          />
          </FormControl>
            <br />
            <FormControl className={clsx(classes.margin, classes.textField)}variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm</InputLabel>
          <OutlinedInput
            id="outlined-basic-password"
            name="password"
            label="Password"
            variant="outlined"
            required
            type={values.showConfirm ? 'text' : 'password'}
            value={values.confirm}
            onChange={handleChange('confirm')}
            margin="none"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirm}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showConfirm ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          </FormControl>
          <br />
          Access
          <Radio
            checked={values.userLevel === 'a'}
            onChange={handleChange('userLevel')}
            value="a"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'A' }}
          />1
          <Radio
            checked={values.userLevel === 'b'}
            onChange={handleChange('userLevel')}
            value="b"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'B' }}
          />2
          <Radio
            checked={values.userLevel === 'c'}
            onChange={handleChange('userLevel')}
            value="c"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'C' }}
          />3
          <br />
          <Link to='/login' component={RouterLink}>
          <Button
            onClick={() => addUser(values)}
            margin="none"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.create}
          >
            Create Account
          </Button>
          </Link>
        </Typography>

      </Container>
    </React.Fragment>
  );
 }








//  <FormControl className={classes.formControl}>
//  <InputLabel id="demo-controlled-open-select-label">Access Level</InputLabel>
//  <Select
//    labelId="demo-controlled-open-select-label"
//    id="demo-controlled-open-select"
//    open={values.open}
//    onClose={handleClose}
//    onOpen={handleOpen}
//    value={values.userLevel}
//    onChange={handleChange('userLevel')}
//  >
//  {access.map((level, i) => (
//    <MenuItem value={level}>{`${level}`}</MenuItem>
//  ))}

//  {/* <MenuItem value={job.management}>Management</MenuItem>
//  <MenuItem value={job.corporate}>Corporate</MenuItem> */}
//  </Select>
// </FormControl>

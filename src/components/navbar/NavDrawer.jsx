
import React, { useState } from 'react';
import { Drawer } from '@material-ui/core';
import { List, ListItem } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Search from './Search';

import { AppBar, IconButton, Typography, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import clsx from 'clsx';

const drawerWidth = 'max-content';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  // appBar: {
    // transition: theme.transitions.create(['margin', 'width'], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
  // },
  // appBarShift: {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  //   marginRight: drawerWidth,
  // },
  // title: {
  //   flexGrow: 1,
  // },
  // hide: {
  //   display: 'none',
  // },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  // content: {
  //   flexGrow: 1,
  //   padding: theme.spacing(3),
  //   transition: theme.transitions.create('margin', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   marginRight: -drawerWidth,
  // },
  // contentShift: {
  //   transition: theme.transitions.create('margin', {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  //   marginRight: 0,
  // },
}));

export default function NavDrawer(props) {
  const [showState, setShowState] = useState(false)

  const toggleDrawer = (open) => (event) => {
    setShowState(open)
  }

  const handleDrawerOpen = () => {
    setShowState(true);
  };

  const handleDrawerClose = () => {
    setShowState(false);
  };


  const classes = useStyles();
  const theme = useTheme();

  const list = () => (
    <div onClick={toggleDrawer(false)}>
      <List>
        <RouterLink to='/personal' style={{textDecoration:'none', color:'inherit'}}>
          <ListItem button>My Photos</ListItem>
        </RouterLink>
        <RouterLink to='/shared' style={{textDecoration:'none', color:'inherit'}}>
          <ListItem button>Friends Photos</ListItem>
        </RouterLink>
        <RouterLink to='/public' style={{textDecoration:'none', color:'inherit'}}>
          <ListItem button>Public Photos</ListItem>
        </RouterLink>
        <RouterLink to='/friends' style={{textDecoration:'none', color:'inherit'}}>
          <ListItem button>My Friends</ListItem>
        </RouterLink>
        <RouterLink to='/login' style={{textDecoration:'none', color:'inherit'}}>
          <ListItem button onClick={() => props.logOut()}>Log Out</ListItem>
        </RouterLink>
        <ListItem button onClick={() => { props.setDarkMode(!props.darkMode) }} >
            {props.darkMode ? <Brightness7Icon /> : <Brightness3Icon />}
          <Typography>{props.darkMode ? 'Light Mode' : 'Dark Mode'}</Typography>
        </ListItem>
      </List>
    </div>
  )

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar
          elevation={0}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: showState,
          })}
        >
          <Toolbar
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="h6" noWrap className={classes.title}>
              <RouterLink to='/' style={{textDecoration:'none', color:'inherit'}}>
                Marineon
        </RouterLink>
            </Typography>
            <div
              style={{ display: "flex", justifyContent: "center", width: "33%" }}
            >
              <Search
              />
            </div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(showState && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: showState,
          })}
        >
        </main>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={showState}
          onClose={toggleDrawer(false)}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          {list()}
        </Drawer>
      </div>
    </React.Fragment>
  )

}

/*
        <div className={classes.drawerHeader} />
        <Typography paragraph></Typography>
*/

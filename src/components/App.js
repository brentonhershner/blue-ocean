import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
/*-------------------Material-UI Imports-------------------*/
import { ThemeProvider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Themes from '../shared/styles/themes';
/*-------------------Component Imports-------------------*/
import '../shared/styles/App.css';
import Home from './Home';
import Gallery from './photoGallery/Gallery'
import TestPage from './TestPage/TestPage';
import UserContextProvider, { UserContext } from '../contexts/user-context';
import PhotosContextProvider from '../contexts/photos-context';
import SearchContextProvider from '../contexts/search-context';
import NavDrawer from './navbar/NavDrawer';
import AddPhotos from './AddPhotos/AddPhotos';
import CreateUser from './Login/createUser';
import Login from './Login/Login';
import FriendsList from './FriendsList';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const appliedTheme = createMuiTheme(darkMode ? Themes.dark : Themes.light);

  const [ loggedUser, setLoggedUser ] = useState({});

  const helloUser = (userObj) => {
    setLoggedUser(userObj);
  }

  const logOut = () => {
    setLoggedUser({});
  }

  useEffect(() => {
    console.log('This is the logged user from App.js', loggedUser);
  }, [loggedUser])

  return (
    <Router>
      <React.Fragment>
        <ThemeProvider theme={appliedTheme}>
         <h1
         style={{textAlign:"center"}}
         >
          Marineon
        </h1>
          <CssBaseline />
          <Container className="App">
            <UserContextProvider>
              <PhotosContextProvider>
                <SearchContextProvider>
                <NavDrawer logOut={logOut} darkMode={darkMode} setDarkMode={setDarkMode} />
                  <Switch>
                    <Route exact path="/" render={() => <Home />} />
                    <Route exact path="/login" render={() => <Login helloUser={helloUser} context={loggedUser}/>} />
                    <Route exact path="/createuser" render={() => <CreateUser />} />
                    <Route exact path="/testpage" render={() => <TestPage />} />
                    <Route exact path="/public" render={() => <Gallery view={'public'} />} />
                    <Route exact path="/personal" render={() => <Gallery view={'personal'} />} />
                    <Route exact path="/shared" render={() => <Gallery view={'shared'} />} />
                    <Route exact path="/friends" render={() => <FriendsList />} />
                  </Switch>
                  <AddPhotos />
                </SearchContextProvider>
              </PhotosContextProvider>
            </UserContextProvider>
          </Container>
        </ThemeProvider>
      </React.Fragment>
    </Router>
  );
}

export default App;

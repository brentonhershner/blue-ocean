import React, { useState } from 'react';
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
import UserContextProvider from '../contexts/user-context';
import PhotosContextProvider from '../contexts/photos-context';
import SearchContextProvider from '../contexts/search-context';
import NavDrawer from './navbar/NavDrawer';
import AddPhotos from './AddPhotos/AddPhotos';
import CreateUser from './Login/createUser'
import SearchResults from './search/SearchResults';
import Login from './Login/Login'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const appliedTheme = createMuiTheme(darkMode ? Themes.dark : Themes.light);

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
                <NavDrawer darkMode={darkMode} setDarkMode={setDarkMode} />
                  <Switch>
                    <Route exact path="/" render={() => <Home />} />
                    <Route exact path="/login" render={() => <Login />} />
                    <Route exact path="/createuser" render={() => <CreateUser />} />
                    <Route exact path="/testpage" render={() => <TestPage />} />
                    <Route exact path="/public" render={() => <Gallery view={'public'} />} />
                    <Route exact path="/personal" render={() => <Gallery view={'personal'} />} />
                    <Route exact path="/shared" render={() => <Gallery view={'shared'} />} />
                    {/* <Route exact path="/search" render={() => <SearchResults />} /> */}
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

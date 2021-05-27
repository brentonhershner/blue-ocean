import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import Themes from '../shared/styles/themes';
import '../shared/styles/App.css';
import Home from './Home';
import Gallery from './photoGallery/Gallery'
import DarkModeSwitch from '../components/SharedComponents/DarkModeSwitch';
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
          <CssBaseline />
          <Container className="App">
            <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
            <UserContextProvider>
              <PhotosContextProvider>
                <SearchContextProvider>
                  <Switch>
                    <Route exact path="/" render={() => <Login />} />
                    <Route exact path="/createuser" render={() => <CreateUser />} />
                    <NavDrawer />
                    <Route exact path="/home" render={() => <Home />} />
                    <Route exact path="/testpage" render={() => <TestPage />} />
                    <Route exact path="/gallery" render={() => <Gallery />} />
                    <Route exact path="/search" render={() => <SearchResults />} />
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

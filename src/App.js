import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Profile from './components/Profile';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import Resume from './pages/Resume';

const App = () => {
  return (
    <div className="App">
      <Container className={'top_60'}>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item xs>
            <Router>
              <Header />
              <div className='main_contents container_shadow'>
                <Switch>
                  <Route path='/portfolio'>
                    <Portfolio />
                  </Route>
                  <Route path='/'>
                    <Resume />
                  </Route>
                </Switch>
              </div>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

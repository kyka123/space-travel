import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Home from 'pages/Home';
import About from 'pages/About';
import Navigation from 'components/Navigation';

const MainView = () => {
  return (
    <div>
      <MainTemplate>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </MainTemplate>
    </div>
  );
};

export default MainView;

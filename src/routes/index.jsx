import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../views/homePage/homePage';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </Router>
);

export default Routes;

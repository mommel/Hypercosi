import React from 'react';
import { Route, Switch } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import SimulatorPage from './containers/SimulatorPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.HOME} component={HomePage} />
      <Route path={routes.SIMULATOR} component={SimulatorPage} />
    </Switch>
  </App>
);

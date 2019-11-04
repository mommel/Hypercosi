import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';
const store = configureStore();

// const Photon = require("electron-photon");
// Photon.__baseDir = "/app";

const AppContainer = ( process.env.PLAIN_HMR || process.env.REACT_APP_PLAIN_HMR ) ? Fragment : ReactHotAppContainer;
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root'),
);
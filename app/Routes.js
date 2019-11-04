import React from 'react'
import routes from './constants/routes'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './containers/App'
import HomePage from './containers/Main/HomePage'
import SimulatorPage from './containers/Main/SimulatorPage'
import Toolbar from "./containers/Toolbar/Toolbar"
import PlanPage from "./containers/Main/PlanPage"
import ExportConfigPage from "./containers/Main/ExportConfigPage"
import styles from './styles/App.css'


type Props = {
  history: {},
}

export default ({ store, history }: Props) => (
  <BrowserRouter>
      <App>
        <ph-window>
          <tool-bar type="header">
            <Toolbar history={history}/>
          </tool-bar>
          <window-content className={styles.contentWindow}>
            <Route exact path={routes.HOME} component={HomePage} />
            <Route exact path={routes.PLAN} component={PlanPage} />
            <Route exact path={routes.SIMULATE} component={SimulatorPage} />
            <Route exact path={routes.EXPORTCONFIG} component={ExportConfigPage} />
          </window-content>
        </ph-window>
      </App>
  </BrowserRouter>
);
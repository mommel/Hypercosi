// @flow
import React, {Component} from 'react';
const { nativeTheme, remote } = require('electron')

import styles from '../../styles/Navbar.mac.css'
import routes from '../../constants/routes';
import {
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  Menu,
  MenuItem,
  Alignment,
  Icon
} from '@blueprintjs/core';
import NavigationButton from './NavigationButton'
import Applogo from "../Applogo/Applogo";

export default class Navigation extends Component<Props> {
  props: Props;
  
  constructor(props){
    super(props)
    this.props = props
  }
  
  render () {
    const { systemPreferences } = remote
    // let theme = nativeTheme.shouldUseDarkColors ? 'bp3-dark' : 'bp3'
    let theme = systemPreferences.isDarkMode() ? 'bp3-dark' : 'bp3'
    return (
      <div id="Navigation">
        <Navbar fixedToTop={true} className={theme} >
          <NavbarGroup align={Alignment.LEFT}>
            <Navbar.Heading><Applogo/></Navbar.Heading>
            <NavbarDivider />
            <NavigationButton history={this.props.history} icon='home' text="Home" link={routes.HOME} />
            <NavbarDivider />
            <NavigationButton history={this.props.history} icon="presentation" text="Plan" link={routes.PLAN} />
            <NavbarDivider />
            <NavigationButton history={this.props.history} icon="presentation" text="Simulate" link={routes.SIMULATE} />
            <NavbarDivider />
            <NavigationButton history={this.props.history} icon="full-stacked-chart" text="Config" link={routes.EXPORTCONFIG} />
            <NavbarDivider />
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Button className="bp3-button bp3-minimal bp3-icon-user"></Button>
            <Button className="bp3-button bp3-minimal bp3-icon-cog"></Button>
          </NavbarGroup>
        </Navbar>
      </div>
    )
  }
}
// @flow
import React, {Component} from 'react';
import {
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  Popover,
  Menu,
  MenuItem,
  Alignment,
} from '@blueprintjs/core';


type Props = {};

export default class Toolbar extends Component<Props> {
  props: Props;
  
  render () {
    return (
      <div id="Toolbar">
        <Navbar fixedToTop={true} className=".bp3-dark">
          <NavbarGroup align={Alignment.LEFT}>
            <button className="bp3-button bp3-minimal bp3-icon-home">Home</button>
            <Button className={Classes.MINIMAL} icon="folder-open" text="Open" />
            <Button className={Classes.MINIMAL} icon="full-stacked-chart"  />
            <Button className={Classes.MINIMAL} icon="presentation" />
            <Button className={Classes.MINIMAL} icon="small-cross" />
            <NavbarDivider />
            <Button className={Classes.MINIMAL} icon="properties" />
            <button className="bp3-button bp3-minimal bp3-icon-user"></button>
            <button className="bp3-button bp3-minimal bp3-icon-cog"></button>
          </NavbarGroup>
        </Navbar>
      </div>
    )
  }
}

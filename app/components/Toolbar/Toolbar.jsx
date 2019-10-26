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
} from '@blueprintjs/core';


type Props = {};

export default class Toolbar extends Component<Props> {
  props: Props;
  /*
  onClick(index) {
    console.log(`Toolbar clicked with ${index}`)
  }
  */
 
  render () {
    return (
      <div id="Toolbar">
        <Navbar>
          <NavbarGroup>
            <Button className={Classes.MINIMAL} icon="folder-open" text="Open" />
            <Button className={Classes.MINIMAL} icon="full-stacked-chart"  />
            <Button className={Classes.MINIMAL} icon="presentation" />
            <Button className={Classes.MINIMAL} icon="small-cross" />
            <NavbarDivider />
            <Button className={Classes.MINIMAL} icon="properties" />
          </NavbarGroup>
        </Navbar>
      </div>
    )
  }
}

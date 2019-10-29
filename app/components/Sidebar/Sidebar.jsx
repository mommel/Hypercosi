// @flow
import React from "react";
import { Pane, ptSize, NavGroup, NavTitle, NavGroupItem } from "react-photonkit";
type Props = {}

export default class Sidebar extends Component<Props> {
  props: Props
  onSelect(index) {
    console.log(`sidebar clicked with ${index}`)
  }
  
  render() {
    return (
      <div id="Sidebar">
       <Pane ptSize="sm" >
        <NavGroup activeKey={1} onSelect={this.onSelect}>
          <NavTitle>nav group icon &amp; text</NavTitle>
          <NavGroupItem eventKey={1} glyph="home" text="home" />
          <NavGroupItem eventKey={2} glyph="download" text="download" />
        </NavGroup>
      </Pane>
      </div>)
  }
}
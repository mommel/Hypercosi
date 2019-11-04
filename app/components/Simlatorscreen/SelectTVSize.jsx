import React, {Component} from "react";
import { Button, Label, MenuItem } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import * as TVSizes from "../../utils/definitions/general-tv-sizes";

type Props = {};

export default class SelectTVSize extends Component {
  constructor(props) {
    super(props);
    this.state = { TVSizes: TVSizes.tvSizes };
  }
  
  props: Props;
  
  itemRenderer(item, {handleClick}) {
    return (
      <MenuItem
        key={item.id}
        // label={item.diagonal.imperial}
        text={item.diagonal.imperial}
        onClick={handleClick}
        shouldDismissPopover={true}
        disabled={false}
      />
    )
  }
  
  handleclick(item) {
    //now this runs
    console.log('clicked')
  }
  
  
  
  render () {
    console.log('tvsize', this.state.TVSizes)
    return (
      <div>
        <Label>Your TV Size
          <Select
            items={this.state.TVSizes}
            filterable={false}
            itemRenderer={this.itemRenderer}
            noResults={<MenuItem disabled={true} text="No results."/>}
            onItemSelect={this.handleclick}
          >
            <Button text={'Your TV Sizes'} rightIcon="caret-down" />
          </Select>
        </Label>
      </div>
    )
  }
}

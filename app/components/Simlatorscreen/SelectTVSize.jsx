import * as React from "react";
import { Button, MenuItem } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import * as TVSizes from "../../utils/definitions/general-tv-sizes";

type Props = {};

export default class SelectTVSize extends Select {
  constructor(props) {
    super(props);
    console.log('Imported JSON', TVSizes.tvSizes)
    this.state = {
      tvSizes: TVSizes.tvSizes
    }
  }
  
  props: Props;
  
  itemRenderer(item, {handleClick}) {
    return (
      <MenuItem
         key={item.diagonal.imperial}
        // label={item.diagonal.imperial}
         text='sss'
        // onClick={handleClick}             // added this line
        // shouldDismissPopover={true}
      />
    )
  }
  
  handleclick(item) {
    //now this runs
    console.log('clicked')
  }
  
  
  
  render () {
    console.log('tvsize', this.state.tvSizes)
    return (
      <Select
        items={this.state.tvSizes}
        filterable={false}
        itemRenderer={this.itemRenderer}
        noResults={<MenuItem disabled={true} text="No results."/>}
        // onItemSelect={this.handleclick}
      >
      </Select>
    )
  }
}

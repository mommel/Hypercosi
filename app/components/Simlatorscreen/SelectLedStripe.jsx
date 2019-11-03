import * as React from "react";
import { Button, Label, MenuItem } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import * as LEDTypes from "../../utils/definitions/led-types";

type Props = {};

export default class SelectLedStripe extends Select {
  constructor(props) {
    super(props);
    this.state = { LEDTypes: LEDTypes.options };
  }
  
  props: Props;
  
  itemRenderer(item, {handleClick}) {
    return (
      <MenuItem
        key={item.lpm}
        // label={item.diagonal.imperial}
        text={item.lpm}
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
    console.log('ledtypes', this.state.LEDTypes)
    return (
      <div>
        <Label>Leds / m
          <Select
            disabled={false}
            items={this.state.LEDTypes}
            filterable={false}
            itemRenderer={this.itemRenderer}
            // noResults={<MenuItem disabled={true} text="No results."/>}
            onItemSelect={this.handleclick}
          >
            <Button text={'Select a LED Type'} rightIcon="caret-down" />
          </Select>
        </Label>
      </div>
    )
  }
}

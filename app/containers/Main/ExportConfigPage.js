// @flow
import React, { Component } from 'react';
import ExportConfigscreen from "../../components/ExportConfigscreen/ExportConfigscreen";

type Props = {}

export default class ExportConfigPage extends Component<Props> {
  
  props: Props
  
  constructor(props){
    super(props)
    this.props = props
  }

  
  render() {
    return <ExportConfigscreen />;
  }
}

// @flow
import React, {Component}  from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import {Alignment, Button, Classes, Icons, Intent} from '@blueprintjs/core';

class NavigationButton extends Component<Props> {
  
  props: Props
  
  constructor(props) {
    super(props)
    this.props = props
    this.doCall = this.doCall.bind(this);
  }
  
  doCall(){
    let history = this.props.history
    history.push(this.props.link)
  }
  
  render () {
    return (
      <div>
        <Button
          alignText={Alignment.RIGHT}
          className={Classes.MINIMAL}
          icon={this.props.icon}
          text={this.props.text}
          onClick={this.doCall}
        />
      </div>
    )
  }
}

NavigationButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string,
  icon: PropTypes.string,
  history: PropTypes.object,
}

export default withRouter(NavigationButton)
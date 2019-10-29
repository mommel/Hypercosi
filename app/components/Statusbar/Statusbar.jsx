// @flow
import React, { Component } from 'react'
import { Colors } from '@blueprintjs/core'

type Props = {}

export default class Statusbar extends Component<Props> {
  props: Props

  render() {
    return (
      <div
        id="StatusBar"
        style={{
          backgroundColor: Colors.LIGHT_GRAY5,
          borderTop: `1px solid ${Colors.LIGHT_GRAY1}`,
          height: '50px',
          padding: 12,
          bottom: 0,
          fixedToBottom: true,
        }}
      />
    )
  }
}

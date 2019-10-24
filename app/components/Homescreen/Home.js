// @flow
import React, { Component } from 'react';
import styles from './Home.css';
import banner from '../../images/banner.png';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div homebg className={styles.container} data-tid="container">
        <img alt="logo" src={banner} />
        <h2>Configuration</h2>
      </div>
    );
  }
}

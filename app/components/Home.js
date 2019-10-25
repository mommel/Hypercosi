// @flow
import React, { Component } from 'react';
import styles from '../styles/css/Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
      </div>
    );
  }
}

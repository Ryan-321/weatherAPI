import React, { Component } from 'react'
import styles from '../styles'

export default class Home extends Component {
  render () {
    return (
      <div style={styles.home_background}>
        <h1>Hello from inside Home</h1>
      </div>
    )
  }
}

import React, { Component } from 'react'
import styles from '../styles'
import Form from './Form'

export default class Home extends Component {
  render () {
    return (
      <div style={styles.home_wrapper}>
        <div style={styles.center}>
          <h2 style={styles.home_tag}>Enter a City and State</h2>
          <Form
            className='text-center'
            styleInput={styles.input_home}
            styleButton={styles.button}
          />
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import styles from '../styles'

export default class Home extends Component {
  render () {
    return (
      <div style={styles.home_wrapper}>
        <div style={styles.center}>
          <h2 style={styles.home_tag}>Enter a City and State</h2>
          <form>
            <input placeholder='Washington, DC' style={styles.input} />
            <button className='btn btn-success' style={{margin: '0 auto', display: 'block'}}>Get Weather</button>
          </form>
        </div>
      </div>
    )
  }
}

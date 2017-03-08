import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from '../styles'
import FormContainer from '../containers/FormContainer'

export default class Header extends Component {
  render () {
    return (
      <nav className='navbar navbar-default' style={styles.header}>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link to={'/'}>
              <h1 className='navbar-brand' style={styles.logo}>WeatherAPI</h1>
            </Link>
          </div>
          <FormContainer
            passClass='navbar-form navbar-right'
            styleInput={styles.input_header}
            passStyle={styles.form_header}
          />
        </div>
      </nav>
    )
  }
}

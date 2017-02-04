import React, { PropTypes } from 'react'
import Header from './Header'

const Main = (props) => {
  return (
    <div className='main_container'>
      <Header />
      {props.children}
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.node
}

module.exports = Main

import React, { PropTypes } from 'react'

const Main = (props) => {
  return (
    <div className='main_container'>
      {/* This is where the header will go  */}
      {props.children}
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.node
}

module.exports = Main

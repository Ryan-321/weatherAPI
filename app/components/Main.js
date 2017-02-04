import React, { PropTypes } from 'react'

const Main = (props) => {
  return (
    <div className='main_container'>
      <div>
        <h1>Title goes here</h1>
      </div>
      {props.children}
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.node
}

module.exports = Main

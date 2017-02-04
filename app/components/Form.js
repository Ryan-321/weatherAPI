import React, { Component, PropTypes } from 'react'

export default class Form extends Component {
  render () {
    return (
      <form className={this.props.passClass} style={this.props.passStyle}>
        <div className='form-group'>
          <input className='form-control' placeholder='Washington, DC' style={this.props.styleInput} />
        </div>
        <button className='btn btn-success' style={this.props.styleButton}>Get Weather</button>
      </form>
    )
  }
}

Form.propTypes = {
  passStyle: PropTypes.object,
  passClass: PropTypes.string,
  styleInput: PropTypes.object,
  styleButton: PropTypes.object
}

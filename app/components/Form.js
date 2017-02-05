import React, { PropTypes } from 'react'
// should make this just a function component
const Form = (props) => {
  return (
    <form
      className={props.passClass}
      style={props.passStyle}
      onSubmit={props.onHandleSubmit}
    >
      <div className='form-group'>
        <input
          className='form-control'
          placeholder='Washington, DC'
          style={props.styleInput}
          onChange={props.onHandleChange}
        />
      </div>
      <button
        className='btn btn-success'
        style={props.styleButton}
      >Get Weather</button>
    </form>
  )
}

Form.propTypes = {
  styleInput: PropTypes.object,
  styleButton: PropTypes.object,
  onHandleChange: PropTypes.func.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
  passClass: PropTypes.string,
  passStyle: PropTypes.object
}

export default Form

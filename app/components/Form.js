import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Form = (props) => {
  return (
    <form
      className={props.passClass}
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
      <Link to={`/forecast/${props.city}`}>
        <button
          className='btn btn-success'
          style={props.styleButton}
          >
            Get Weather
        </button>
      </Link>
    </form>
  )
}

Form.propTypes = {
  styleInput: PropTypes.object,
  styleButton: PropTypes.object,
  onHandleChange: PropTypes.func.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
  passStyle: PropTypes.object,
  passClass: PropTypes.string,
  city: PropTypes.string
}

export default Form

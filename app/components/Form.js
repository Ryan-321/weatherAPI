import React, { Component, PropTypes } from 'react'

export default class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e) {
    this.setState({
      search: e.target.value
    })
    console.log(this.state.search)
  }
  handleSubmit (e) {
    e.preventDefault()
    var search = this.state.search
    // need to do something with search results
    // refactor and move logic to FormContainer
  }
  render () {
    return (
      <form
        className={this.props.passClass}
        style={this.props.passStyle}
        onSubmit={this.handleSubmit}
      >
        <div className='form-group'>
          <input
            className='form-control'
            placeholder='Washington, DC'
            style={this.props.styleInput}
            onChange={this.handleChange}
          />
        </div>
        <button
          className='btn btn-success'
          style={this.props.styleButton}
        >Get Weather</button>
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

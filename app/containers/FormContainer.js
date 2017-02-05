import React, { Component, PropTypes } from 'react'
import Form from '../components/Form'

export default class FormContainer extends Component {
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
  }
  handleSubmit (e) {
    e.preventDefault()
    var search = this.state.search
    // need to do something with search results
    // put into API and call
  }
  render () {
    console.log(this)
    console.log(this.props)
    return (
      <Form
        passClass={this.props.passClass}
        onHandleChange={this.handleChange}
        onHandleSubmit={this.handleSubmit}
        passStyle={this.props.passStyle}
        styleInput={this.props.styleInput}
        styleButton={this.props.styleButton}
      />
    )
  }
}

FormContainer.propTypes = {
  passStyle: PropTypes.object,
  passClass: PropTypes.string,
  styleInput: PropTypes.object,
  styleButton: PropTypes.object
}

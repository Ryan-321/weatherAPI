import React, { Component, PropTypes } from 'react'
import Form from '../components/Form'
import weatherHelper from '../utils/weatherHelper'

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
    var results = weatherHelper.getCurrentWeather(search)
    console.log(results)
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

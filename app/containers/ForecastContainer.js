import React, { Component, PropTypes } from 'react'
import weatherHelper from '../utils/weatherHelper'
import Forecast from '../components/Forecast'

export default class ForecastContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      weather: {}
    }
  }
  componentDidMount () {
    var query = this.props.params.city
    weatherHelper.getCurrentWeather(query)
      .then(function (response) {
        console.log(response)
        this.setState({
          isLoading: false
        })
      }.bind(this))
  }
  render () {
    return (
      <Forecast
        isLoading={this.state.isLoading}
        current={this.state.weather}
      />
    )
  }
}

ForecastContainer.propTypes = {
  params: PropTypes.object.isRequired
}

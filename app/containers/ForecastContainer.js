import React, { Component, PropTypes } from 'react'
import weatherHelper from '../utils/weatherHelper'
import Forecast from '../components/Forecast'
import styles from '../styles'

export default class ForecastContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      weather: []
    }
  }
  componentDidMount () {
    var query = this.props.params.city
    weatherHelper.getFiveDayForecast(query)
      .then(function (response) {
        this.setState({
          isLoading: false,
          weather: response
        })
      }.bind(this))
  }
  render () {
    return (
      <div className='container-fluid'>
        <div className='row' style={styles.forecast_row}>
          {this.state.weather
            .map((day) => {
              return
                <Forecast
                  isLoading={this.state.isLoading}
                  tempDay={day.temp.day}
                  tempEve={day.temp.eve}
                  description={day.weather[0].description}
                  humidity={day.humidity}
                />
            }
          )}
        </div>
      </div>
    )
  }
}

ForecastContainer.propTypes = {
  params: PropTypes.object.isRequired
}

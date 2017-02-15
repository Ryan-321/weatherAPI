import React, { Component, PropTypes } from 'react'
import weatherHelper from '../utils/weatherHelper'
import FiveDayForecast from '../components/FiveDayForecast'
import styles from '../styles'

export default class FiveDayForecastContainer extends Component {
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
  convertEpoch (dt) {
    let date = new Date(dt * 1000)
    return date.toDateString()
  }
  render () {
    console.log(this.state.weather)
    return (
      <div className='container-fluid'>
        <div className='row' style={styles.forecast_row}>
          {this.state.weather
            .map((day, index) => {
              return (
                <FiveDayForecast
                  isLoading={this.state.isLoading}
                  tempDay={day.temp.day}
                  tempEve={day.temp.eve}
                  description={day.weather[0].description}
                  humidity={day.humidity}
                  source={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                  date={this.convertEpoch(day.dt)}
                  key={index}
                />
              )
            }
          )}
        </div>
      </div>
    )
  }
}

FiveDayForecastContainer.propTypes = {
  params: PropTypes.object.isRequired
}

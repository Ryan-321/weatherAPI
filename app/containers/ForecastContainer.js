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
    this.handleDetail = this.handleDetail.bind(this)
  }
  handleApiCallAndUpdateState (param) {
    weatherHelper.getWeekForecast(param)
    .then(function (response) {
      this.setState({
        isLoading: false,
        weather: response
      })
    }.bind(this))
  }
  componentDidMount () {
    this.handleApiCallAndUpdateState(this.props.params.city)
  }
  componentWillReceiveProps (nextProps) {
    this.handleApiCallAndUpdateState(nextProps.params.city)
  }
  convertEpoch (dt) {
    let date = new Date(dt * 1000)
    return date.toDateString()
  }
  handleDetail (index) {
    console.log(this.state.weather[index])
    this.context.router.push({
      pathname: `/detail/${this.props.params.city}`,
      state: {
        data: this.state.weather[index]
      }
    })
  }
  render () {
    console.log(this)
    return (
      <div className='container-fluid'>
        <div className='row text-center'>
          <h1 style={styles.skinny_header}>{this.props.params.city}</h1>
        </div>
        <div className='row' style={styles.forecast_row}>
          {this.state.weather
            .map((day, index) => {
              return (
                <Forecast
                  value={index}
                  key={index}
                  isLoading={this.state.isLoading}
                  initiateDetail={this.handleDetail}
                  source={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                  date={this.convertEpoch(day.dt)}
                />
              )
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

ForecastContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

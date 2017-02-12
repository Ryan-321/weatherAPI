import React, { PropTypes } from 'react'
import Loading from './Loading'
// import styles from '../styles'

const Forecast = (props) => {
  if (props.isLoading === true) {
    return <Loading />
  }
  return (
    <div>
      <ul>
        <li>{props.tempDay}</li>
        <li>{props.tempEve}</li>
        <li>{props.description}</li>
        <li>{props.humidity}</li>
      </ul>
    </div>
  )
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  tempDay: PropTypes.string.isRequired,
  tempEve: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired
}

export default Forecast

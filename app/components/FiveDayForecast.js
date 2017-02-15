import React, { PropTypes } from 'react'
import Loading from './Loading'
// import styles from '../styles'

const FiveDayForecast = (props) => {
  if (props.isLoading === true) {
    return <Loading />
  }
  return (
    <div>
      <img src={props.source} />
      <p>{props.date}</p>
      {/* <ul>
        <li>{props.tempDay}</li>
        <li>{props.tempEve}</li>
        <li>{props.description}</li>
        <li>{props.humidity}</li>
      </ul> */}
    </div>
  )
}

FiveDayForecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  source: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tempDay: PropTypes.number.isRequired,
  tempEve: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
}

export default FiveDayForecast

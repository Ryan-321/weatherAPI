import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Loading from './Loading'
// import styles from '../styles'

const Forecast = (props) => {
  if (props.isLoading === true) {
    return <Loading />
  }
  return (
    <Link to='detail'>
      <img src={props.source} />
      <p>{props.date}</p>
    </Link>
  )
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  source: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default Forecast

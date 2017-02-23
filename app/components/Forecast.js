import React, { PropTypes } from 'react'
import Loading from './Loading'
import styles from '../styles'

const Forecast = (props) => {
  if (props.isLoading === true) {
    return <Loading />
  }
  console.log('Forecast')
  console.log(props)
  return (
    <div onClick={() => props.initiateDetail(props.value)} style={styles.forecast_item}>
      <img src={props.source} />
      <p style={styles.detail_list}>{props.date}</p>
    </div>
  )
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  source: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  initiateDetail: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

export default Forecast

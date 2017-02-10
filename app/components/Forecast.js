import React, { PropTypes } from 'react'
import Loading from './Loading'
// import styles from '../styles'

const Forecast = (props) => {
  if (props.isLoading === true) {
    return <Loading />
  }
  return (
    <div>
      Forecast page
    </div>
  )
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default Forecast

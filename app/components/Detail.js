import React, { PropTypes } from 'react'
import styles from '../styles'

const Detail = (props) => {
  return (
    <div className='text-center' style={{marginTop: '3em'}}>
      <ul style={styles.detail_list}>
        <li><img src={props.source} style={styles.forecast_image} /></li>
        <li>{props.dt}</li>
        <li>{props.city}</li>
        <li>{props.data.weather[0].description}</li>
        <li>Min Temp: {props.data.temp.min}</li>
        <li>Max Temp: {props.data.temp.max}</li>
        <li>Humidity: {props.data.humidity}</li>
      </ul>
    </div>
  )
}

Detail.propTypes = {
  city: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  dt: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
}

export default Detail

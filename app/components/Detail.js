import React, { PropTypes } from 'react'
import styles from '../styles'

const Detail = (props) => {
  return (
    <div className='text-center'>
      <h1 style={styles.skinny_header}>{props.city}</h1>
      <ul style={styles.detail_list}>
        <li><img src='#' /></li>
        <li>{props.dt}</li>
        <li>{props.data.weather[0].main}</li>
        <li>Day: {props.data.temp.day}</li>
        <li>Evening: {props.data.temp.eve}</li>
        <li>Humidity: {props.data.humidity}</li>
      </ul>
    </div>
  )
}

Detail.propTypes = {
  city: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  dt: PropTypes.string.isRequired
}

export default Detail

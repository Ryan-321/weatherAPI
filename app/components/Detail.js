import React, { PropTypes } from 'react'
import styles from '../styles'

const Detail = (props) => {
  const data = props.location.state.data
  console.log(props)
  return (
    <div className='text-center'>
      <h1 style={styles.skinny_header}>{props.params.some_city}</h1>
      <ul style={styles.detail_list}>
        <li><img src='#' /></li>
        <li>{data.dt}</li>
        <li>{data.weather[0].main}</li>
        <li>Day: {data.temp.day}</li>
        <li>Evening: {data.temp.eve}</li>
        <li>Humidity: {data.humidity}</li>
      </ul>
    </div>
  )
}

Detail.propTypes = {
  location: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

export default Detail

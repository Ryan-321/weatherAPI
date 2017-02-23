import React, { Component, PropTypes } from 'react'
import Detail from '../components/Detail'
import imageHelper from '../utils/imageHelper'

export default class DetailContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: this.props.location.state.data
    }
  }
  convertEpoch (dt) {
    let date = new Date(dt * 1000)
    return date.toDateString()
  }
  render () {
    console.log('DC-render')
    console.log(this.props)
    return (
      <Detail
        source={imageHelper.getImage(this.state.data.weather[0].main)}
        city={this.props.params.some_city}
        data={this.state.data}
        dt={this.convertEpoch(this.state.data.dt)}
      />
    )
  }
}

DetailContainer.propTypes = {
  params: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

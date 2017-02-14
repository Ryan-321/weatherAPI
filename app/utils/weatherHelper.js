import axios from 'axios'
import API_KEY from '../../.secret'

const weatherHelper = {
  getCurrentWeather: (city) => {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&appid=${API_KEY}&units=imperial`).then((response) => {
      console.log('Current weather worked')
      return response
    }).catch((error) => {
      console.log(error)
    })
  },
  getFiveDayForecast: (city) => {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&appid=${API_KEY}&cnt=&units=imperial`).then((response) => {
      // console.log(response)
      return response.data.list
    }).catch((error) => {
      console.log(error)
    })
  }
}

export default weatherHelper

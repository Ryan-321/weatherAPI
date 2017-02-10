import axios from 'axios'
import API_KEY from '../../.secret'

const weatherHelper = {
  getCurrentWeather: (city) => {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&appid=${API_KEY}`).then((response) => {
      console.log('Current weather worked')
      return response
    }).catch((error) => {
      console.log(error)
    })
  },
  getFiveDayForecast: (city) => {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&appid=${API_KEY}&cnt=5`).then((response) => {
      return response
    }).catch((error) => {
      console.log(error)
    })
  }
}

export default weatherHelper

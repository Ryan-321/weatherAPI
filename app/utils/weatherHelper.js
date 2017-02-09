import axios from 'axios'
import API_KEY from '../../.secret'

const weatherHelper = {
  getCurrentWeather: (city) => {
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&appid=${API_KEY}`).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }
}

export default weatherHelper

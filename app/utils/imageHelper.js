const imageHelper = {
  getImage (weather) {
    switch (weather) {
      case 'Clear':
        return String('./app/images/sun.svg')
      case 'Clouds':
        return String('./app/images/cloud.svg')
      case 'Snow':
        return String('./app/images/snowflake.svg')
      case 'Rain':
        return String('./app/images/water-drop.svg')
      case 'Drizzle':
        return String('./app/images/water-drop.svg')
      case 'Thunderstorm':
        return String('./app/images/storm.svg')
      default:
        return String('./app/images/sky.svg')
    }
  }
}
// TODO Need to make sure mapping is correct

export default imageHelper

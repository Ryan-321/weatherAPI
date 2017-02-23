const imageHelper = {
  getImage (weather) {
    switch (weather) {
      case 'Clear':
        String('./app/images/sun.svg')
        break
      case 'Cloud':
        String('./app/images/cloud.svg')
        break
      default:
        return String('./app/images/sky.svg')
    }
  }
}
// TODO Need to make sure mapping is correct

export default imageHelper

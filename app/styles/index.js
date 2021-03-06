const styles = {
  home_wrapper: {
    background: "url('../app/images/pattern.svg') no-repeat",
    height: '100vh',
    width: '100%',
    display: 'flex'
  },
  home_tag: {
    color: 'white',
    fontWeight: '100',
    fontSize: '3em'
  },
  logo: {
    fontSize: '3em',
    fontWeight: '100',
    letterSpacing: '3px',
    color: '#fff'
  },
  skinny_header: {
    fontWeight: '100',
    fontSize: '3em'
  },
  center: {
    margin: 'auto',
    alignSelf: 'center'
  },
  input_home: {
    padding: '.5em',
    borderRadius: '2px',
    fontSize: '1.2em',
    margin: '0 auto',
    width: '60%'
  },
  input_header: {
    marginRight: '.5em'
  },
  button: {
    margin: '1em auto',
    display: 'block'
  },
  header: {
    margin: '0',
    border: '0',
    borderRadius: '0',
    backgroundColor: 'orange'
  },
  form_header: {
    marginTop: '2em',
    marginRight: '1em'
  },
  forecast_row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  forecast_item: {
    margin: '1em',
    cursor: 'pointer'
  },
  forecast_image: {
    width: '50%',
    height: '100px',
    margin: '0 auto',
    display: 'block'
  },
  detail_list: {
    listStyleType: 'none',
    fontWeight: '100',
    fontSize: '2em'
  }
}

module.exports = styles

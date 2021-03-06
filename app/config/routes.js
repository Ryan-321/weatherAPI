import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import DetailContainer from '../containers/DetailContainer'
import ForecastContainer from '../containers/ForecastContainer'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='forecast/:city' component={ForecastContainer} />
      <Route path='detail/:some_city' component={DetailContainer} />
    </Route>
  </Router>
)

module.exports = routes

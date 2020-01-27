import React from 'react'
import './Styles/App.css'
import {Switch, Route} from 'react-router'
import routesData from './Routes'

import Navbar from './Components/Navbar'

const routes = routesData.map(route => (
  <Route path={route.path} exact={route.exact} component={route.component}/>
))

const App = () => {
  return (
    <div className="app">
      <Navbar loggedIn={false} />
      <Switch>{routes}</Switch>
    </div>
  )
}

export default App
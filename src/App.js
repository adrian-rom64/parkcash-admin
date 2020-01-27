import React from 'react'
import './Styles/App.css'
import {Switch, Route} from 'react-router'
import routesData from './Data/Routes'

import Navbar from './Components/Navbar'
import Menu from './Components/Menu'

const routes = routesData.map(route => (
  <Route key={route.path} path={route.path} exact={route.exact} component={route.component}/>
))

const App = () => {
  return (
    <div className="app">
      <Navbar loggedIn={false} />
      <Menu />
      <div className='view-container'>
        <Switch>{routes}</Switch>
      </div>
    </div>
  )
}

export default App
import React, {useState, useEffect} from 'react'
import './Styles/App.css'
import {Switch, Route} from 'react-router'
import routesData from './Data/Routes'
import {withRouter} from 'react-router'

import Navbar from './Components/Navbar'
import Menu from './Components/Menu'
import Login from './Views/Login'

const App = () => {

  const loggedIn = !!localStorage.getItem('token')


  const routes = routesData.map(route => (
    <Route key={route.path} path={route.path} exact={route.exact} component={route.component}/>
  ))

  const loggedInLayout = (
    <React.Fragment>
      <Menu />
      <div className='view-container'>
        <Switch>{routes}</Switch>
      </div>
    </React.Fragment>
  )
  
  return (
    <div className="app">
      <Navbar loggedIn={loggedIn} />
      {loggedIn ? loggedInLayout : <Login />}
    </div>
  )
}

export default withRouter(App)
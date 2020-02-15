import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Router} from 'react-router-dom'
import {translate} from './Utils' 

import './Styles/index.css'
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'


// initialize
const history = require("history").createBrowserHistory()
global.tr = translate

// main component
const app = (
  <Router history={history}>
    <App />
  </Router>
)

// render
ReactDOM.render(app, document.getElementById('root'))

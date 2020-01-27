import React from 'react'
import ReactDOM from 'react-dom'
import './Styles/index.css'
import App from './App'
import {Router} from 'react-router-dom'

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

require('dotenv').config()
const history = require("history").createBrowserHistory()

const app = (
  <Router history={history}>
    <App />
  </Router>
)

ReactDOM.render(app, document.getElementById('root'))

import React, { useState, useEffect } from 'react'
import '../Styles/Login.css'
import {InputText} from 'primereact/inputtext'
import {Card} from 'primereact/card'
import {Button} from 'primereact/button'
import {withRouter} from 'react-router'

import Axios from 'axios'

const Login = props => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = async (email, password) => {
    const axios = Axios.create({
      baseURL: 'https://parkcash.itelab.pl/v1',
      headers: {
        'Content-type': 'application/json'
      }
    })
    const data = {
      email: email,
      password: password
    }
    return axios.post('/sessions', data)
  } 

  const test = async () => {
    const axios = Axios.create({
      baseURL: 'https://parkcash.itelab.pl/v1',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer '
      }
    })
    return axios.get('/users')
  }

  const loginHandler = async () => {
    const res = await login(username, password)
    console.log(res)
    if (res.status === 201) alert('success')
    else alert('error')
  }

  useEffect(() => {
    props.history.push('/login')
  }, []) // eslint-disable-line

  return ( 
    <div className='login'>
      <div className='login-box'>
        <Card>
          <InputText placeholder={global.tr('username')} value={username} onChange={(e) => setUsername(e.target.value)}/>
          <InputText placeholder={global.tr('password')} type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <Button onClick={loginHandler} label={global.tr('login-button')} />
        </Card>
      </div>
    </div>
   )
}
 
export default withRouter(Login)
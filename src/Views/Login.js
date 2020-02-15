import React, { useState, useEffect } from 'react'
import '../Styles/Login.css'
import {InputText} from 'primereact/inputtext'
import {Card} from 'primereact/card'
import {Button} from 'primereact/button'
import {withRouter} from 'react-router'

// const Api = require('../Api').default.getInstance()
import Axios from 'axios'

const Login = props => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login2 = async (email, password) => {
    const axios = Axios.create({
      baseURL: 'https://parkcash.itelab.pl/v1',
      timeout: 10000,
      headers: {
        'Content-type': 'application/json'
      }
    })
    const data = {
      email: email,
      password: password
    }
    return await axios.post('/sessions', data)
  } 

  const login3 = async () => {
    const axios = Axios.create({
      baseURL: 'https://parkcash.itelab.pl/v1',
      timeout: 10000,
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE2MTMzMTczODF9.UeULpMeI8eQ_tQU6-1-u_u5h1PtG86o52NbqpTmDhbE'
      }
    })
    return await axios.get('/users')
  }

  const login = async () => {
    const res = await login2(username, password)
    console.log(res)
    if (res.code === 200) alert('success')
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
          <Button onClick={login} label={global.tr('login-button')} />
        </Card>
      </div>
    </div>
   )
}
 
export default withRouter(Login)
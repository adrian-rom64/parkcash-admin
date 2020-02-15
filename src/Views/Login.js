import React, { useState } from 'react'
import {InputText} from 'primereact/inputtext'
import {Card} from 'primereact/card'
import {Button} from 'primereact/button'
import {withRouter} from 'react-router'
import Api from '../Api'
import '../Styles/Login.css'

const Login = props => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = async () => {
    if (email === '' || password === '') return
    const res = await Api.post('/sessions', {
      email: email,
      password: password
    })
    if (res.code === 201) {
      localStorage.setItem('token', res.data.token)
      props.history.push('/')
    } else {
      alert('Wrong credentials')
    }
  }

  const keyHandler = event => {
    if (event.key === 'Enter') loginHandler()
  }

  return ( 
    <div className='login'>
      <div className='login-box'>
        <Card>
          <InputText
            placeholder={global.tr('email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={keyHandler}
          />
          <InputText
            placeholder={global.tr('password')}
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={keyHandler}
          />
          <Button onClick={loginHandler} label={global.tr('login-button')} />
        </Card>
      </div>
    </div>
   )
}
 
export default withRouter(Login)
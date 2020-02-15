import React, { useState, useEffect } from 'react'
import '../Styles/Login.css'
import {InputText} from 'primereact/inputtext'
import {Card} from 'primereact/card'
import {Button} from 'primereact/button'
import {withRouter} from 'react-router'
import Api from '../Api'

const Login = props => {

  const [email, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    const res = await Api.post('/sessions', {
      email: email,
      password: password
    })
    console.log(res)
  }

  useEffect(() => {
    props.history.push('/login')
  }, []) // eslint-disable-line

  return ( 
    <div className='login'>
      <div className='login-box'>
        <Card>
          <InputText placeholder={global.tr('email')} value={email} onChange={(e) => setUsername(e.target.value)}/>
          <InputText placeholder={global.tr('password')} type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <Button onClick={login} label={global.tr('login-button')} />
        </Card>
      </div>
    </div>
   )
}
 
export default withRouter(Login)
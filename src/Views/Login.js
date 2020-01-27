import React, { useState } from 'react'
import '../Styles/Login.css'
import {InputText} from 'primereact/inputtext'
import {Card} from 'primereact/card'
import {Button} from 'primereact/button'

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return ( 
    <div className='login'>
      <div className='login-box'>
        <Card>
          <InputText placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
          <InputText placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <Button label='Log in'/>
        </Card>
      </div>
    </div>
   )
}
 
export default Login

import React, { useState } from 'react'
import Wrapper from './style'
import axios from 'axios'

const Login = ({setLoggedInUser}) => {

  const [contact, setContact] = useState('')
  const [password, setPassword] = useState('')
  const login = (e) => {
    e.target.value = "Logging in ..."
    e.target.disabled = true
    e.preventDefault()
    axios.post('http://localhost:8000/api/user/login',{ contact, password })
    .then(({data}) => {
      setLoggedInUser(data)
    })
    .catch(console.log)
    .finally(_ => {
      setContact('')
      setPassword('')
      e.target.value = "Login"
      e.target.disabled = false
    })
  }


  return (
    <Wrapper>
        <h1>Login</h1>
        <input type="text" placeholder='Contact*' pattern='[0-9]{10}' required value={contact} onChange={e => setContact(e.target.value)} />
        <input type="password" placeholder='Password*' required value={password} onChange={e => setPassword(e.target.value)} />
        <input type="submit" value="Login" onClick={login} />
    </Wrapper>
  )
}

export default Login
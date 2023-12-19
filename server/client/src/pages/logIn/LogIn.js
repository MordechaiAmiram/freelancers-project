import React, { useState } from 'react'
import LogInForm from './LogInForm'
import api from '../../services/BaseURL'

function LogIn() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = async ({ target }) => {
    switch (target.name) {
      case 'username':
        setUsername(target.value)
        break
      case 'password':
        setPassword(target.value)
        break
      default:
        return
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await api.post('/users/log-in', {
        username: username,
        password: password
      })
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <LogInForm
        username={username}
        password={password}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default LogIn
import React, { useState } from 'react'
import LogInForm from './LogInForm'
import api from '../../services/BaseURL'
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';

function LogIn() {
  const navigate = useNavigate()
  const passwordProps = useInput()
  const usernameProps = useInput()

  // const handleChange = async ({ target }) => {
  //   switch (target.name) {
  //     case 'username':
  //       // setUsername(target.value)
  //       break
  //     case 'password':
  //       setPassword(target.value)
  //       break
  //     default:
  //       return
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await api.post('/users/log-in', {
        username: usernameProps.value,
        password: passwordProps.value
      })
      console.log(data);
      localStorage.setItem('currentUser', JSON.stringify(data))
      navigate('/')
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <LogInForm
        usernameProps={usernameProps}
        passwordProps={passwordProps}
        // password={password}
        // handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default LogIn
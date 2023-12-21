import React from 'react'
import LogInForm from './LogInForm'
import api from '../../services/BaseURL'
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';

function LogIn() {
  const navigate = useNavigate()
  const passwordProps = useInput()
  const usernameProps = useInput()

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
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default LogIn
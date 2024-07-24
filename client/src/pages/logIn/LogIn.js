import React, { useContext, useState } from 'react'
import LogInForm from './LogInForm'
import api from '../../services/BaseURL'
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { userContext } from '../../App';

function LogIn() {
  const navigate = useNavigate()
  const passwordProps = useInput('')
  const usernameProps = useInput('')
  const { setCurrentUser } = useContext(userContext)

  const [message, setMessage] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (usernameProps.value === '' ||
      usernameProps.value === ' ' ||
      passwordProps.value === '' ||
      passwordProps.value === ' '
    ) {
      setMessage('יש למלא את השדות הנדרשים')
      return
    }
    setMessage('')
    try {
      const { data }  = await api.post('/auth/log-in', {
        username: usernameProps.value,
        password: passwordProps.value
      })
      localStorage.setItem('currentUser', JSON.stringify(data.user))
      localStorage.setItem('accessToken', data.token)
      setCurrentUser(data.user)
      navigate('/')
    } catch (err) {
      console.error(err.response.data);
      if (err.response.data === 'Username or password incorrect') {
        setMessage('שם משתמש או סיסמה שגויים, אם לא נרשמת לאתר נא הירשם')
      } else if (err.response.data === 'User blocked') {
        setMessage('משתמש חסום עקב פעילות לא ראויה')
      }
    }
  }

  return (
    <>
      <LogInForm
        usernameProps={usernameProps}
        passwordProps={passwordProps}
        handleSubmit={handleSubmit}
        message={message}
      />
    </>
  )
}

export default LogIn
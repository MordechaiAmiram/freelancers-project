import React, { useState } from 'react'
import SignUpForm from './SignUpForm'
import SignUpFreelanceForm from './SignUpFreelanceForm'
import api from '../../services/BaseURL'
function SignUp() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  
  const [isFreelance, setIsFreelance] = useState(false)

  const handleSubmitAsClient = async (e) => {
    e.preventDefault()
    try {
      const user = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        phone: phone,
        password: password
      }
      const [data] = api.post('/users/sign-up', user)
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmitAsFreelance = async (e) => {
    e.preventDefault()
    setIsFreelance(true)
  }

  const handleChange = async ({ target }) => {
    switch (target.name) {
      case 'firstName':
        setFirstName(target.value)
        break
      case 'lastName':
        setLastName(target.value)
        break
      case 'username':
        setUsername(target.value)
        break
      case 'phone':
        setPhone(target.value)
        break
      case 'email':
        setEmail(target.value)
        break
      case 'password':
        setPassword(target.value)
        break
      default:
        return
    }
  }


  return (
    <>
      <div style={{ visibility: isFreelance ? 'hidden' : "" }}>
        <SignUpForm
          firstName={firstName}
          lastName={lastName}
          username={username}
          email={email}
          phone={phone}
          password={password}
          handleChange={handleChange}
          handleSubmitAsClient={handleSubmitAsClient}
          handleSubmitAsFreelance={handleSubmitAsFreelance}
        />
      </div>
      <div style={{ visibility: !isFreelance ? 'hidden' : "" }}>
        <SignUpFreelanceForm />
      </div>
    </>
  )
}

export default SignUp
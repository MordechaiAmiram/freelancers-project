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
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [building, setBuilding] = useState('')
  const [suite, setSuite] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [title, setTitle] = useState('')
  const [about, setAbout] = useState('')
  const [serviceLocation, setServiceLoaction] = useState('')
  const [subcategory, setSubcategory] = useState('')

  const [categoriesList, setCategoriesList] = useState('')
  const [subcategoryList, setSubcategoryList] = useState('')

  const [isFreelance, setIsFreelance] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = {
        isFreelance: isFreelance,
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        phone: phone,
        password: password,
        city: city,
        street: street,
        building: building,
        suite: suite,
        zipCode: zipCode,
        title: title,
        about: about,
        accountType: 'pro',
        serviceLocation: serviceLocation,
        categoryId: subcategory
      }
      const { data } = await api.post('/users/sign-up', user)
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleBack = (e) => {
    e.preventDefault()
    setIsFreelance(false)
  }

  const continueAsFreelance = async (e) => {
    e.preventDefault()
    setIsFreelance(true)
    try {
      const { data } = await api.get('/categories/parents')
      setCategoriesList(data)
    } catch (err) {
      console.log(err.message);
    }
  }

  const handleCategorySelect = async (value) => {
    try {
      const { data } = await api.get(`/categories/children/${value}`)
      setSubcategoryList(data)
    } catch (err) {
      console.log(err.message);
    }
  }

  const handleChange = async ({ target }) => {
    const { name, value } = target
    switch (name) {
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      case 'username':
        setUsername(value)
        break
      case 'phone':
        setPhone(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      case 'city':
        setCity(value)
        break
      case 'street':
        setStreet(value)
        break
      case 'building':
        setBuilding(value)
        break
      case 'suite':
        setSuite(value)
        break
      case 'zipCode':
        setZipCode(value)
        break
      case 'title':
        setTitle(value)
        break
      case 'about':
        setAbout(value)
        break
      case 'serviceLocation':
        setServiceLoaction(value)
        break
      case 'category':
        handleCategorySelect(value)
        break
      case 'subcategory':
        setSubcategory(value)
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
          handleSubmit={handleSubmit}
          continueAsFreelance={continueAsFreelance}
        />
      </div>
      <div style={{ visibility: !isFreelance ? 'hidden' : "" }}>
        <SignUpFreelanceForm
          city={city}
          street={street}
          building={building}
          suite={suite}
          zipCode={zipCode}
          title={title}
          about={about}
          serviceLocation={serviceLocation}
          categoriesList={categoriesList}
          subcategoryList={subcategoryList}
          subcategory={subcategory}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
        />
      </div>
    </>
  )
}

export default SignUp
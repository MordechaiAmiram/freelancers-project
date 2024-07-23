import React, { useContext, useState } from 'react'
import SignUpForm from './SignUpForm'
import SignUpFreelanceForm from './SignUpFreelanceForm'
import api from '../../services/BaseURL'
import { useNavigate } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import { userContext } from '../../App';

function SignUp() {
  const navigate = useNavigate()
  const { setCurrentUser } = useContext(userContext)
  const firstNameProps = useInput('')
  const lastNameProps = useInput('')
  const usernameProps = useInput('')
  const emailProps = useInput('')
  const phoneProps = useInput('')
  const passwordProps = useInput('')
  const cityProps = useInput('')
  const streetProps = useInput('')
  const buildingProps = useInput('')
  const suiteProps = useInput('')
  const zipCodeProps = useInput('')
  const titleProps = useInput('')
  const aboutProps = useInput('')
  const serviceLocationProps = useInput('')
  const subcategoryProps = useInput('')
  const [message, setMessage] = useState('')

  const [imageId, setImageId] = useState('person_place_holder2_fhahmn')
  const [categoriesList, setCategoriesList] = useState('')
  const [subcategoryList, setSubcategoryList] = useState('')
  const [isFreelance, setIsFreelance] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = {
        isFreelance: isFreelance,
        firstName: firstNameProps.value?.trim(),
        lastName: lastNameProps.value?.trim(),
        username: usernameProps.value?.trim(),
        email: emailProps.value?.trim(),
        phone: phoneProps.value?.trim(),
        password: passwordProps.value?.trim(),
        city: cityProps.value?.trim(),
        street: streetProps.value?.trim(),
        building: buildingProps.value?.trim(),
        suite: suiteProps.value?.trim(),
        zipCode: zipCodeProps.value?.trim(),
        title: titleProps.value?.trim(),
        about: aboutProps.value?.trim(),
        accountType: 'pro',
        serviceLocation: serviceLocationProps.value,
        categoryId: subcategoryProps.value,
        imageId: imageId
      }
      const { data } = await api.post('/users/sign-up', user)
      console.log(data);
      localStorage.setItem('currentUser', JSON.stringify(data.user))
      localStorage.setItem('accessToken', data.token)
      setCurrentUser(data.user)
      navigate('/')
    } catch (err) {
      console.error(err);
      setMessage(err.response.data)
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

  const handleImageId = (id) => {
    setImageId(id)
  }

  return (
    <>
      <div style={{ display: isFreelance ? 'none' : 'flex', justifyContent: 'center' }}>
        <SignUpForm
          firstNameProps={firstNameProps}
          lastNameProps={lastNameProps}
          usernameProps={usernameProps}
          emailProps={emailProps}
          phoneProps={phoneProps}
          passwordProps={passwordProps}
          handleSubmit={handleSubmit}
          continueAsFreelance={continueAsFreelance}
          message={message}
        />
      </div>
      <div style={{ display: !isFreelance ? 'none' : 'flex', justifyContent: 'center' }}>
        <SignUpFreelanceForm
          cityProps={cityProps}
          streetProps={streetProps}
          buildingProps={buildingProps}
          suiteProps={suiteProps}
          zipCodeProps={zipCodeProps}
          titleProps={titleProps}
          aboutProps={aboutProps}
          serviceLocationProps={serviceLocationProps}
          categoriesList={categoriesList}
          subcategoryList={subcategoryList}
          subcategoryProps={subcategoryProps}
          handleImageId={handleImageId}
          handleCategorySelect={handleCategorySelect}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
          message={message}
        />
      </div>
    </>
  )
}

export default SignUp
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

  const [imageId, setImageId] = useState('person_place_holder2_fhahmn')
  const [categoriesList, setCategoriesList] = useState('')
  const [subcategoryList, setSubcategoryList] = useState('')
  const [isFreelance, setIsFreelance] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = {
        isFreelance: isFreelance,
        firstName: firstNameProps.value,
        lastName: lastNameProps.value,
        username: usernameProps.value,
        email: emailProps.value,
        phone: phoneProps.value,
        password: passwordProps.value,
        city: cityProps.value,
        street: streetProps.value,
        building: buildingProps.value,
        suite: suiteProps.value,
        zipCode: zipCodeProps.value,
        title: titleProps.value,
        about: aboutProps.value,
        accountType: 'pro',
        serviceLocation: serviceLocationProps.value,
        categoryId: subcategoryProps.value,
        imageId: imageId
      }
      const { data } = await api.post('/users/sign-up', user)
      console.log(data);
      localStorage.setItem('currentUser', JSON.stringify(data))
      setCurrentUser(data)
      navigate('/')
    } catch (err) {
      console.error(err);
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
        />
      </div>
    </>
  )
}

export default SignUp
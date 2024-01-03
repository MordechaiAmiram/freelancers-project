import React, { useState } from 'react'
import FreelanceForm from './FreelanceForm'
import useInput from '../../../hooks/useInput'
import api from '../../../services/BaseURL'
import './freelance.css'

function Freelance({ profile, handleLogOut }) {
  const { freelanceId, userId, firstName, lastName, email, phone, city, street, building, suite,
    accountType, profileImageId, serviceLocation, title, about, zipCode } = profile

  const [isUpdate, setIsUpdate] = useState(false)
  const firstNameProps = useInput({ text: firstName })
  const lastNameProps = useInput({ text: lastName })
  const emailProps = useInput({ text: email })
  const phoneProps = useInput({ text: phone })
  const cityProps = useInput({ text: city })
  const streetProps = useInput({ text: street })
  const buildingProps = useInput({ text: building })
  const suiteProps = useInput({ text: suite })
  const accountTypeProps = useInput({ text: accountType })
  const profileImageIdProps = useInput({ text: profileImageId })
  const serviceLocationProps = useInput({ text: serviceLocation })
  const titleProps = useInput({ text: title })
  const aboutProps = useInput({ text: about })
  const zipCodeProps = useInput({ text: zipCode })

  const handleUpdate = () => {
    setIsUpdate(prev => !prev)
  }

  const handleSubmit = async () => {
    try {
      const userDetails = {
        userId: userId,
        firstName: firstNameProps.value,
        lastName: lastNameProps.value,
        email: emailProps.value,
        phone: phoneProps.value,
      }
      const freelanceDetails = {
        freelanceId: freelanceId,
        title: titleProps.value,
        about: aboutProps.value,
        serviceLocation: serviceLocationProps.value,
        imageId: profileImageIdProps.value
      }
      const addressDetails = {
        userId: userId,
        city: cityProps.value,
        street: streetProps.value,
        building: buildingProps.value,
        suite: suiteProps.value,
        zipCode: zipCodeProps.value
      }

      const { data: user } = await api.put('users',userDetails)
      const { data: freelance } = await api.put('/freelance', freelanceDetails)
      const { data: address } = await api.put('/freelance/address', addressDetails)

      const prevData = await JSON.parse(localStorage.getItem('currentUser'))

      if (user === 'Succeeded!') {
        prevData.firstName = firstNameProps.value
        prevData.lastName = lastNameProps.value
        prevData.email = emailProps.value
        prevData.phone = phoneProps.value
      }

      if (freelance === 'Succeeded!') {
        prevData.title = titleProps.value
        prevData.about = aboutProps.value
        prevData.serviceLocation = serviceLocationProps.value
        prevData.imageId = profileImageIdProps.value
      }

      if (address === 'Succeeded!') {
        prevData.city = cityProps.value
        prevData.street = streetProps.value
        prevData.building = buildingProps.value
        prevData.suite = suiteProps.value
        prevData.zipCode = zipCodeProps.value
      }

      localStorage.setItem('currentUser', JSON.stringify(prevData))
      setIsUpdate(false)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <FreelanceForm
        profile={profile}
        handleLogOut={handleLogOut}
        isUpdate={isUpdate}
        handleUpdate={handleUpdate}
        handleSubmit={handleSubmit}
        valueProps={
          {
            firstNameProps: firstNameProps,
            lastNameProps: lastNameProps,
            emailProps: emailProps,
            phoneProps: phoneProps,
            cityProps: cityProps,
            streetProps: streetProps,
            buildingProps: buildingProps,
            suiteProps: suiteProps,
            accountTypeProps: accountTypeProps,
            profileImageIdProps: profileImageIdProps,
            serviceLocationProps: serviceLocationProps,
            titleProps: titleProps,
            aboutProps: aboutProps,
            zipCodeProps: zipCodeProps
          }
        }
      />
    </>
  )
}

export default Freelance
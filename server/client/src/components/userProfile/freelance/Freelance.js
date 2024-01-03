import React, { useState } from 'react'
import FreelanceForm from './FreelanceForm'
import useInput from '../../../hooks/useInput'
import api from '../../../services/BaseURL'
import './freelance.css'

function Freelance({ profile, handleLogOut }) {
  const { freelanceId, firstName, lastName, email, phone, city, street, building, suite,
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
      const details = {
        freelanceId: freelanceId,
        title: titleProps.value,
        about: aboutProps.value,
        serviceLocation: serviceLocationProps.value,
        imageId: profileImageIdProps.value
      }
      const { data } = await api.put('/freelance', details)

      if (data === 'Succeeded!') {
        const prevData = JSON.parse(localStorage.getItem('currentUser'))
        prevData.title = titleProps.value
        prevData.about = aboutProps.value
        prevData.serviceLocation = serviceLocationProps.value
        prevData.imageId = profileImageIdProps.value
        localStorage.setItem('currentUser', JSON.stringify(prevData))
      }
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
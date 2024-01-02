import React, { useState } from 'react'
import FreelanceForm from './FreelanceForm'
import useInput from '../../../hooks/useInput'
import './freelance.css'

function Freelance({ profile, handleLogOut }) {
  const { firstName, lastName, email, phone, city, street, building, suite,
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

  return (
    <>
      <FreelanceForm
        profile={profile}
        handleLogOut={handleLogOut}
        isUpdate={isUpdate}
        handleUpdate={handleUpdate}
        firstNameProps={firstNameProps}
        lastNameProps={lastNameProps}
        emailProps={emailProps}
        phoneProps={phoneProps}
        cityProps={cityProps}
        streetProps={streetProps}
        buildingProps={buildingProps}
        suiteProp={suiteProps}
        accountTypeProps={accountTypeProps}
        profileImageIdProps={profileImageIdProps}
        serviceLocationProps={serviceLocationProps}
        titleProps={titleProps}
        aboutProps={aboutProps}
        zipCodeProps={zipCodeProps}
      />
    </>
  )
}

export default Freelance
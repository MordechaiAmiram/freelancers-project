import React, { useContext, useState } from 'react'
import { userContext } from '../../App';
import useInput from '../../hooks/useInput';
import Client from '../../components/userProfile/client/Client';
import Freelance from '../../components/userProfile/freelance/Freelance';
import api from '../../services/BaseURL';
import './privateUserProfile.css'
import PortfolioManagement from '../../components/portfolioManagement/PortfolioManagement';

function PrivateUserProfile() {
  const { currentUser, setCurrentUser } = useContext(userContext)

  const { freelanceId, userId, firstName, lastName, email, phone, city, street, building, suite,
    accountType, profileImageId, serviceLocation, title, about, zipCode } = currentUser

  const [isUpdate, setIsUpdate] = useState(false)
  const firstNameProps = useInput({ text: firstName || '' })
  const lastNameProps = useInput({ text: lastName || '' })
  const emailProps = useInput({ text: email || '' })
  const phoneProps = useInput({ text: phone || '' })
  const cityProps = useInput({ text: city || '' })
  const streetProps = useInput({ text: street || '' })
  const buildingProps = useInput({ text: building || '' })
  const suiteProps = useInput({ text: suite || '' })
  const profileImageIdProps = useInput({ text: profileImageId || '' })
  const serviceLocationProps = useInput({ text: serviceLocation || '' })
  const titleProps = useInput({ text: title || '' })
  const aboutProps = useInput({ text: about || '' })
  const zipCodeProps = useInput({ text: zipCode || '' })

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
      const { data: user } = await api.put('users', userDetails)

      if (user === 'Succeeded!') {
        currentUser.firstName = firstNameProps.value
        currentUser.lastName = lastNameProps.value
        currentUser.email = emailProps.value
        currentUser.phone = phoneProps.value
      }

      if (freelanceId) {

        const { data: freelance } = await api.put('/freelance', freelanceDetails)
        const { data: address } = await api.put('/freelance/address', addressDetails)

        if (freelance === 'Succeeded!') {
          currentUser.title = titleProps.value
          currentUser.about = aboutProps.value
          currentUser.serviceLocation = serviceLocationProps.value
          currentUser.imageId = profileImageIdProps.value
        }

        if (address === 'Succeeded!') {
          currentUser.city = cityProps.value
          currentUser.street = streetProps.value
          currentUser.building = buildingProps.value
          currentUser.suite = suiteProps.value
          currentUser.zipCode = zipCodeProps.value
        }
      }

      localStorage.setItem('currentUser', JSON.stringify(currentUser))
      setCurrentUser(currentUser)
      setIsUpdate(false)

    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='private-profile-page min-height-container page-background-color'>
      <div className='private-profile-main max-width-container'>
        {freelanceId ?
          <div className='freelance-private-profile private-profile-grid'>
            <Freelance
              profile={currentUser}
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
                  profileImageIdProps: profileImageIdProps,
                  serviceLocationProps: serviceLocationProps,
                  titleProps: titleProps,
                  aboutProps: aboutProps,
                  zipCodeProps: zipCodeProps
                }
              }
            />
            <PortfolioManagement />
          </div> :
          <Client
            profile={currentUser}
            isUpdate={isUpdate}
            handleUpdate={handleUpdate}
            handleSubmit={handleSubmit}
            valueProps={
              {
                firstNameProps: firstNameProps,
                lastNameProps: lastNameProps,
                emailProps: emailProps,
                phoneProps: phoneProps,
              }
            }
          />}
      </div>
    </div>
  )
}

export default PrivateUserProfile
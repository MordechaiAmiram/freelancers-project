import React, { useContext, useState } from 'react'
import { userContext } from '../../App';
import useInput from '../../hooks/useInput';
import Client from '../../components/userProfile/client/Client';
import Freelancer from '../../components/userProfile/freelancer/Freelancer';
import api from '../../services/BaseURL';
import './privateUserProfile.css';
import classNames from '../../styles/classnames';
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
        firstName: firstNameProps.value.trim(),
        lastName: lastNameProps.value.trim(),
        email: emailProps.value.trim(),
        phone: phoneProps.value.trim(),
      }
      const freelanceDetails = {
        freelanceId: freelanceId,
        title: titleProps.value.trim(),
        about: aboutProps.value.trim(),
        serviceLocation: serviceLocationProps.value.trim(),
        imageId: profileImageIdProps.value.trim(),
        accountType: accountType
      }
      const addressDetails = {
        userId: userId,
        city: cityProps.value.trim(),
        street: streetProps.value.trim(),
        building: buildingProps.value.toString().trim(),
        suite: suiteProps.value.toString().trim(),
        zipCode: zipCodeProps.value.toString().trim()
      }

      setCurrentUser(prev => {
        return {...prev, ...userDetails, ...freelanceDetails, ...addressDetails}
      })
      localStorage.setItem('currentUser', JSON.stringify({...currentUser, ...userDetails, ...freelanceDetails, ...addressDetails}))
      setIsUpdate(false)
      
      const { data: user } = await api.put('users', userDetails)

      if (freelanceId) {
        const {data: freelancer} = await Promise.all(
          api.put('/freelance', freelanceDetails),
          api.put('/freelance/address', addressDetails)
        ) 
      } 

    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className={`${classNames.pageBackgroundColor} ${classNames.minHeightContainer} private-profile-page`}>
      <div className={`${classNames.maxWidthContainer1400} private-profile-main`}>
        {freelanceId ?
          <div className='freelance-private-profile private-profile-grid'>
            <Freelancer
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
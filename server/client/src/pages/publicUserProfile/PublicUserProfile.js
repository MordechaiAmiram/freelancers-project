import React, { useEffect, useState } from 'react'
import PublicUserProfileForm from './PublicUserProfileForm'
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
function PublicUserProfile() {
    const { state } = useLocation() //freelnace data
    const location = useLocation()
    const splitURL = location.pathname.split('/')
    const [data] = useFetch(`/freelance/${splitURL[splitURL.length - 1]}`)
    const [reviews] = useFetch(`/reviews/by-freelance/${splitURL[splitURL.length - 1]}`)
    const [freelance, setFreelance] = useState(state)

    const [showNumberOfRatings, setShowNumberOfRatings] = useState(false)

    const handleMouseOver = () => {
        setShowNumberOfRatings(true)
    }

    const handleMouseLeave = () => {
        setShowNumberOfRatings(false)
    }

    useEffect(() => {
        if (data) {
            setFreelance(data)
        }
    }, [data])

    return (
        <>
            {freelance &&
                <PublicUserProfileForm
                    profile={freelance}
                    reviews={reviews}
                    handleMouseOver={handleMouseOver}
                    showNumberOfRatings={showNumberOfRatings}
                    handleMouseLeave={handleMouseLeave}
                />}
        </>
    )
}

export default PublicUserProfile
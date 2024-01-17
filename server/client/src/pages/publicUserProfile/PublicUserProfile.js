import React, { useEffect, useState } from 'react'
import PublicUserProfileForm from './PublicUserProfileForm'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

function PublicUserProfile() {
    const { state } = useLocation() //freelnace data
    const location = useLocation()
    const splitURL = location.pathname.split('/')
    const freelanceId = splitURL[splitURL.length - 1]
    const [data, setData, error] = useFetch(`/freelance/${freelanceId}`)
    const [freelance, setFreelance] = useState(state)
    const [portfolios] = useFetch(`/portfolios/${freelanceId}`)
    const [reviews, setReviews] = useFetch(`/reviews/by-freelance/${splitURL[splitURL.length - 1]}`)

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
                    portfolios={portfolios}
                    setReviews={setReviews}
                    reviews={reviews}
                />}
                {error && 
                <h3>{error}</h3>}
        </>
    )
}

export default PublicUserProfile
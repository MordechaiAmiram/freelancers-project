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

    const handleUpdateReviews = async (review) => {
        setFreelance(prev=>{
            const prevData = prev
            prevData.numberOfRatings ++
            prevData.rating += review.rating
            return prevData
        })
        setReviews(prev => {
            return [...prev, review]
        })
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
                    handleUpdateReviews={handleUpdateReviews}
                    portfolios={portfolios}
                    reviews={reviews}
                />}
            {error &&
                <h3>{error}</h3>}
        </>
    )
}

export default PublicUserProfile
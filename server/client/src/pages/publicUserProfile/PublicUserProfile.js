import React, { useEffect, useState } from 'react'
import PublicUserProfileForm from './PublicUserProfileForm'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import api from '../../services/BaseURL'

function PublicUserProfile() {
    const { state } = useLocation() //freelnace data
    const location = useLocation()
    const splitURL = location.pathname.split('/')
    const freelanceId = splitURL[splitURL.length - 1]
    const [data, setData, error] = useFetch(`/freelance/${freelanceId}`)
    const [freelance, setFreelance] = useState(state)
    const [portfolios] = useFetch(`/portfolios/${freelanceId}`)
    const [reviews, setReviews] = useFetch(`/reviews/by-freelance/${freelanceId}`)

    const handleUpdateReviews = async (review) => {
        setFreelance(prev => {
            const prevData = prev
            prevData.numberOfRatings++
            prevData.rating = review.rating
            return prevData
        })
        setReviews(prev => {
            return [...prev, review]
        })
    }

    const handleDeleteReview = async (reviewId) => {
        try {
            const { data } = await api.delete('/reviews', { data: { reviewId: reviewId } })
            if (data) {
                const newReviews = reviews.filter(review => review.id !== reviewId)
                setReviews(newReviews)
                setFreelance(prev => {
                    const prevData = prev
                    prevData.numberOfRatings--
                    prevData.rating = data
                    console.log(prevData.numberOfRatings, " number of rating");
                    console.log(prevData.rating, " rating");
                    return prevData
                })
            }
        } catch (err) {
            console.error(err);
        }
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
                    handleDeleteReview={handleDeleteReview}
                    portfolios={portfolios}
                    reviews={reviews}
                />}
            {error &&
                <h3>{error}</h3>}
        </>
    )
}

export default PublicUserProfile
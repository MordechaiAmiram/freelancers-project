import React, { useEffect, useState } from 'react'
import PublicUserProfileForm from './PublicUserProfileForm'
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
function PublicUserProfile() {
    const { state } = useLocation();
    const location = useLocation()
    const splitURL = location.pathname.split('/')
    const [data, setData] = useFetch(`/freelance/${splitURL[splitURL.length - 1]}`)
    const [reviews] = useFetch(`/reviews/by-freelance/${splitURL[splitURL.length - 1]}`)
    const [freelance, setFreelance] = useState(state)

    // useEffect(() => {
    //     if ( data) {
    //         setFreelance(data)
    //     }
    // }, [data])
    
    return (
        <>
            <PublicUserProfileForm 
            profile={freelance} 
            reviews={reviews}
            />
        </>
    )
}

export default PublicUserProfile
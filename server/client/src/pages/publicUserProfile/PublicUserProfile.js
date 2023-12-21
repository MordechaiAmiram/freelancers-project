import React, { useEffect, useState } from 'react'
import PublicUserProfileForm from './PublicUserProfileForm'
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
function PublicUserProfile() {
    const { state } = useLocation();
    const location = useLocation()
    const splitURL = location.pathname.split('/')
    const data = useFetch(`/freelancers${splitURL[splitURL.length - 1]}`)

    const [freelance, setFreelance] = useState(state)

    useEffect(() => {
        if (!state && data) {
            setFreelance(data)
        }
    }, [state, data])

    console.log(data, 'data');
    console.log(state, 'state');
    return (
        <>
            <PublicUserProfileForm state={freelance} />
        </>
    )
}

export default PublicUserProfile
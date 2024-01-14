import React, { useEffect, useState } from 'react'
import PublicUserProfileForm from './PublicUserProfileForm'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

function PublicUserProfile() {
    const { state } = useLocation() //freelnace data
    const location = useLocation()
    const splitURL = location.pathname.split('/')
    const freelanceId = splitURL[splitURL.length - 1]
    const [data] = useFetch(`/freelance/${freelanceId}`)
    const [freelance, setFreelance] = useState(state)
    const [portfolios] = useFetch(`/portfolios/${freelanceId}`)

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
                />}
        </>
    )
}

export default PublicUserProfile
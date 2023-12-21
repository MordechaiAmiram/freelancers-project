import React from 'react'
import PublicUserProfileForm from './PublicUserProfileForm'
import { useLocation } from 'react-router-dom';
function PublicUserProfile() {
    const { state } = useLocation();

    return (
        <>
            <PublicUserProfileForm state={state} />
        </>
    )
}

export default PublicUserProfile
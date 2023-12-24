import React from 'react'
import ClientForm from './ClientForm'
function Client({ profile, handleLogOut }) {
    return (
        <ClientForm
            profile={profile}
            handleLogOut={handleLogOut}
        />
    )
}

export default Client
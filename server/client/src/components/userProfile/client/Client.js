import React from 'react'
import ClientForm from './ClientForm'
function Client({ profile, handleLogOut, valueProps, isUpdate, handleSubmit, handleUpdate }) {
    return (
        <ClientForm
            profile={profile}
            handleLogOut={handleLogOut}
            valueProps={valueProps}
            isUpdate={isUpdate}
            handleUpdate={handleUpdate}
            handleSubmit={handleSubmit}
        />
    )
}

export default Client
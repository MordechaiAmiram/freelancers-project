import React from 'react'
import ClientForm from './ClientForm'
function Client({ profile, valueProps, isUpdate, handleSubmit, handleUpdate }) {
    return (
        <ClientForm
            profile={profile}
            valueProps={valueProps}
            isUpdate={isUpdate}
            handleUpdate={handleUpdate}
            handleSubmit={handleSubmit}
        />
    )
}

export default Client
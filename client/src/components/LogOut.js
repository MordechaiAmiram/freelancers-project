import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../App'
import { Button } from '@mui/material'

function LogOut() {
    const navigate = useNavigate()
    const { setCurrentUser } = useContext(userContext)

    const handleLogOut = () => {
        localStorage.removeItem('currentUser')
        localStorage.removeItem('accessToken')
        setCurrentUser('')
        navigate('/')
    }

    return (
        <Button onClick={handleLogOut}>יציאה</Button>
    )
}

export default LogOut
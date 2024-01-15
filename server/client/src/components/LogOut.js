import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../App'
import { Button } from '@mui/material'

function LogOut() {
    const navigate = useNavigate()
    const { setCurrentUser } = useContext(userContext)

    const handleLogOut = () => {
        localStorage.setItem('currentUser', JSON.stringify(""))
        setCurrentUser('')
        navigate('/')
    }

    return (
        <Button onClick={handleLogOut}>יציאה</Button>
    )
}

export default LogOut
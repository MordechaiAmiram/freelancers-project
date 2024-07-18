import React from 'react'
import './logIn.css'
import { Avatar, Button, TextField } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as RouterLink } from 'react-router-dom';

function LogInForm({ handleSubmit, usernameProps, passwordProps, message }) {

    return (
        <div className='log-in-wrapper'>

            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet" />

            <form className='log-in-form' onSubmit={handleSubmit}>

                <Avatar sx={{ bgcolor: '#03BFCB' }}>
                    <LockOutlinedIcon fontSize='medium' />
                </Avatar>

                <h3>כניסה</h3>

                <TextField
                    label='שם משתמש'
                    required
                    {...usernameProps}
                    variant="outlined"
                    type='text'
                    name='username'
                    sx={{width: '100%', marginTop: '5%'}}
                />

                <TextField
                    label='סיסמה'
                    required
                    {...passwordProps}
                    variant="outlined"
                    type='password'
                    name='password'
                    sx={{width: '100%', marginTop: '5%'}}
                />

                <Button type="submit">כניסה</Button>
                {/* <div className="social">
                        <div className="go"><i className="fab fa-google"></i>  Google</div>
                        <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                    </div> */}
                <p>{message}</p>
                <RouterLink to={'/sign-up'}>משתמש לא רשום? הירשם </RouterLink>
            </form>
        </div>
    )
}

export default LogInForm
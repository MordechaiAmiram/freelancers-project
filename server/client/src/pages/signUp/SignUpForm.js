import React from 'react'
import './signUp.css'
import { Avatar, Button, Grid, TextField } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function SignUpForm(props) {
    const { firstNameProps, lastNameProps, usernameProps, emailProps, phoneProps,
        passwordProps, handleSubmit, continueAsFreelance, message } = props

    return (
        <div className='log-in-wrapper'>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet" />

            <form className='sign-up-form' onSubmit={handleSubmit}>

                <Avatar sx={{ bgcolor: '#03BFCB' }}>
                    <LockOutlinedIcon fontSize='medium' />
                </Avatar>

                <h3>הרשמה</h3>

                <Grid container spacing={2}>
                    <Grid item xs={6} >
                        <TextField
                            label='שם פרטי'
                            required
                            {...firstNameProps}
                            variant="outlined"
                            type='text'
                            name='firstName'
                            sx={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField
                            label='שם משפחה'
                            required
                            {...lastNameProps}
                            variant="outlined"
                            type='text'
                            name='lastName'
                            sx={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label='שם משתמש'
                            required
                            {...usernameProps}
                            variant="outlined"
                            type='text'
                            name='username'
                            sx={{ width: '100%' }}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            label='טלפון'
                            required
                            {...phoneProps}
                            variant="outlined"
                            type='text'
                            name='phone'
                            sx={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item xs={30}>
                        <TextField
                            label='דוא"ל'
                            required
                            {...emailProps}
                            variant="outlined"
                            type='text'
                            name='email'
                            sx={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item xs={20}>
                        <TextField
                            label='סיסמה'
                            required
                            {...passwordProps}
                            variant="outlined"
                            type='password'
                            name='password'
                            sx={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Button type='submit'>הרשמה כלקוח</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={continueAsFreelance}>המשך הרשמה כפרילנס</Button>
                    </Grid>
                </Grid>

                {/* <div className="social">
                    <div className="go"><i className="fab fa-google"></i>  Google</div>
                    <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                </div> */}
                <p>{message}</p>
                <RouterLink to={'/log-in'}>אם אתה משתמש רשום היכנס מכאן</RouterLink>
            </form>
        </div>
    )
}

export default SignUpForm
import React from 'react'
import './logIn.css'
import { Avatar, Paper } from '@mui/material'
import styled from '@emotion/styled'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import zIndex from '@mui/material/styles/zIndex'

// import InputField from '../../components/form/InputField'
// import { Button } from '@mui/material'
function LogInForm({ handleSubmit, usernameProps, passwordProps }) {

    const LogInPaper = styled(Paper)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '35%',
        minWidth: '290px',
        borderRadius: '8px',
        minHeight: 'fit-content',
        margin: 'auto',
        // boxShadow: '0 0 5px rgba(2, 2, 2, 0.2)',
        zIndex: '100'
    }));

    return (
        <div>
            <LogInPaper variant="">
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet" />
                <form className='log-in-form'>
                    <Avatar sx={{bgcolor: '#03BFCB'}}>
                        <LockOutlinedIcon fontSize='medium'/>
                    </Avatar>
                    <h3>כניסה</h3>

                    {/* <InputField
                    label={'Email or Phone'}
                    sx={{ width: '100%' }} /> */}

                    <label htmlFor="username">שם משתמש
                        <input
                            type="text"
                            name='username'
                            {...usernameProps}
                            placeholder="שם משתמש" />
                    </label>

                    <label htmlFor="password">סיסמה
                        <input
                            type="password"
                            name='password'
                            {...passwordProps}
                            placeholder="סיסמה" />
                    </label>

                    <button onClick={handleSubmit}>היכנס</button>
                    <div className="social">
                        <div className="go"><i className="fab fa-google"></i>  Google</div>
                        <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                    </div>
                </form>
            </LogInPaper>
        </div >
    )
}

export default LogInForm